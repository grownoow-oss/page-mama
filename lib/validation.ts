import DOMPurify from 'isomorphic-dompurify'

/**
 * Utility functions for input validation and sanitization
 */

/**
 * Sanitize URL input to prevent XSS attacks
 * @param input - The URL string to sanitize
 * @returns Sanitized URL string
 */
export function sanitizeUrl(input: string): string {
    if (!input) return ''
    const cleaned = input.trim()
    
    // We only want HTTP/HTTPS URLs
    try {
        const url = new URL(cleaned.startsWith('http') ? cleaned : `https://${cleaned}`)
        if (url.protocol !== 'http:' && url.protocol !== 'https:') {
            return ''
        }
    } catch {
        // If it's completely malformed, let the validation handle it later
    }

    return DOMPurify.sanitize(cleaned, { ALLOWED_TAGS: [] })
}

/**
 * Validate if the URL matches supported social media platforms
 * @param url - The URL to validate
 * @param supportedDomains - Array of supported domain patterns
 * @returns Boolean indicating if URL is valid
 */
export function isValidSocialMediaUrl(url: string, supportedDomains: string[]): boolean {
    if (!url) return false
    try {
        const urlLower = url.toLowerCase()
        return supportedDomains.some(domain => urlLower.includes(domain))
    } catch {
        return false
    }
}

/**
 * Validate and sanitize email input
 * @param email - Email string to validate
 * @returns Boolean indicating if email is valid
 */
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email.trim())
}

/**
 * Sanitize general text input (names, messages, etc.)
 * @param input - Text to sanitize
 * @returns Sanitized text
 */
export function sanitizeText(input: string): string {
    if (!input) return ''
    const sanitized = DOMPurify.sanitize(input, { ALLOWED_TAGS: [] })
    return sanitized.trim().slice(0, 500)
}
