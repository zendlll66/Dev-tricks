const API_BASE = import.meta.env.VITE_API_URL;
console.log(API_BASE)
export const fetcher = async (url, options = {}) => {
    const token = localStorage.getItem('token');
    console.log(url)

    const res = await fetch(`${API_BASE}/api${url}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: token ? `Bearer ${token}` : undefined,
            ...options.headers,
        },
        ...options,
    });
    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
        throw new Error(data.message || 'API error');
    }

    return data;
};