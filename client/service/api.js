const API_BASE = import.meta.env.VITE_API_URL;

export const fetcher = async (url, options = {}) => {
    const baseUrl = import.meta.env.VITE_API_URL || '';
    const headers = options.body instanceof FormData
        ? { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        : {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        };

    const response = await fetch(baseUrl+"/api" + url, {
        ...options,
        headers
    });
    if (!response.ok) throw new Error('API error');
    return response.json();
};
