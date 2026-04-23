import DOMPurify from 'isomorphic-dompurify'

/**
 * Sanitize HTML content to prevent XSS attacks
 * Use this for any user-generated or API-sourced content
 */
export function sanitizeHtml(dirty: string): string {
    return DOMPurify.sanitize(dirty, {
        ALLOWED_TAGS: [], // Strip all HTML tags
        KEEP_CONTENT: true // Keep text content
    })
}

/**
 * Sanitize an entire analysis result object
 */
export function sanitizeAnalysisResult(result: any): any {
    return {
        executiveSummary: sanitizeHtml(result.executiveSummary || ''),
        engagement: result.engagement, // Numbers are safe
        contentQuality: {
            strengths: (result.contentQuality?.strengths || []).map(sanitizeHtml),
            weaknesses: (result.contentQuality?.weaknesses || []).map(sanitizeHtml)
        },
        actionItems: (result.actionItems || []).map((item: any) => ({
            title: sanitizeHtml(item.title || ''),
            priority: item.priority // Enum is safe
        })),
        calendar: (result.calendar || []).map((item: any) => ({
            day: sanitizeHtml(item.day || ''),
            time: sanitizeHtml(item.time || ''),
            topic: sanitizeHtml(item.topic || ''),
            type: sanitizeHtml(item.type || '')
        })),
        topContent: (result.topContent || []).map((item: any) => ({
            title: sanitizeHtml(item.title || ''),
            type: sanitizeHtml(item.type || ''),
            stats: sanitizeHtml(item.stats || '')
        }))
    }
}
