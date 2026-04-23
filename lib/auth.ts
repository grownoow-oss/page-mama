import { NextApiRequest, NextApiResponse } from 'next'
import { adminAuth } from './firebaseAdmin'

export interface AuthenticatedRequest extends NextApiRequest {
    user?: {
        uid: string;
        email?: string;
    }
}

export function verifyAuth(
    handler: (req: AuthenticatedRequest, res: NextApiResponse) => Promise<void>
) {
    return async (req: AuthenticatedRequest, res: NextApiResponse) => {
        try {
            const authHeader = req.headers.authorization
            if (!authHeader || !authHeader.startsWith('Bearer ')) {
                return res.status(401).json({ error: 'Unauthorized: No token provided' })
            }

            const token = authHeader.split('Bearer ')[1]
            if (!token) {
                return res.status(401).json({ error: 'Unauthorized: Invalid token format' })
            }

            // Verify Firebase ID token
            const decodedToken = await adminAuth.verifyIdToken(token)

            // Attach user data to request
            req.user = {
                uid: decodedToken.uid,
                email: decodedToken.email,
            }

            // Call the actual handler
            return handler(req, res)
        } catch (error) {
            console.error('Auth Error:', error)
            return res.status(401).json({ error: 'Invalid or expired token' })
        }
    }
}
