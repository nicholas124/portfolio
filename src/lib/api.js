// Thin wrappers around your future API Gateway + Lambda endpoints.
// Until VITE_API_BASE_URL is set, these degrade gracefully so the UI still works.

const BASE = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '') || ''

export const apiConfigured = Boolean(BASE)

/**
 * Increment + read the visitor counter (Lambda -> DynamoDB).
 * Expected response: { count: number }
 */
export async function recordVisit() {
  if (!BASE) return null
  try {
    const res = await fetch(`${BASE}/visits`, { method: 'POST' })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    return typeof data.count === 'number' ? data.count : null
  } catch (err) {
    console.warn('visitor counter unavailable:', err.message)
    return null
  }
}

/**
 * Submit the contact form (Lambda -> SES).
 * Expects { name, email, message }; returns true on success.
 */
export async function sendContactMessage({ name, email, message }) {
  if (!BASE) {
    // No backend yet — fall back to a mailto so the form is never a dead end.
    throw new Error('NO_BACKEND')
  }
  const res = await fetch(`${BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message }),
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return true
}
