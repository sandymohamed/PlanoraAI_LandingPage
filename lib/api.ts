/**
 * Base URL for the Planora backend API.
 * Set NEXT_PUBLIC_API_URL in the environment (e.g. https://api.planora.app/api/v1).
 */
export const API_BASE_URL = 'http://localhost:3001/api/v1';

export async function postJson<T = unknown>(
  path: string,
  body: Record<string, unknown>
): Promise<{ ok: boolean; data?: T; error?: string }> {
  try {
    const res = await fetch(`${API_BASE_URL}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = (await res.json().catch(() => ({}))) as T & { error?: string; message?: string };
    if (!res.ok) {
      return { ok: false, error: data?.error || data?.message || 'Request failed' };
    }
    return { ok: true, data };
  } catch {
    return { ok: false, error: 'Network error. Please try again.' };
  }
}
