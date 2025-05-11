const API_BASE = import.meta.env.VITE_API_URL;

export const fetcher = async (url, options = {}) => {
    const token = localStorage.getItem('token');

    // ถ้า body เป็น FormData ห้ามใส่ Content-Type
    const isFormData = options.body instanceof FormData;

    const res = await fetch(`${API_BASE}/api${url}`, {
        headers: {
            ...(isFormData
                ? {} // ไม่ใส่ Content-Type
                : { 'Content-Type': 'application/json' }),
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
