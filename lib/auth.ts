import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'CHANGE_THIS_IN_PRODUCTION'

export interface AuthenticatedRequest extends NextApiRequest {
    userId?: string
    userEmail?: string
}

export function verifyAuth(
    handler: (req: AuthenticatedRequest, res: NextApiResponse) => Promise<void>
) {
    return async (req: AuthenticatedRequest, res: NextApiResponse) => {
        try {
            // Get token from HttpOnly cookie
            const token = req.cookies.auth_token

            if (!token) {
                return res.status(401).json({ error: 'Unauthorized' })
            }

            // Verify JWT token
            const decoded = jwt.verify(token, JWT_SECRET) as {
                userId: string
                email: string
            }

            // Attach user data to request
            req.userId = decoded.userId
            req.userEmail = decoded.email

            // Call the actual handler
            return handler(req, res)
        } catch (error) {
            return res.status(401).json({ error: 'Invalid or expired token' })
        }
    }
}

// Example usage in API route:
// export default verifyAuth(async (req, res) => {
//   // req.userId is now available and verified
//   const userId = req.userId
//   // ... your code
// })
