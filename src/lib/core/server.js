
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const serverFetch = async (path) => {
    const res = await fetch(`${baseUrl}${path}`);
    // handle 401, 404, 403
    return res.json();
}

export const serverMutation = async (path, data, method = 'POST') => {
    const res = await fetch(`${baseUrl}${path}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    // const text = await res.text();
    // console.log('Raw response:', text); // ← check Next.js terminal

    // if (!text) {
    //     throw new Error('Empty response from server');
    // }
    // handle 401, 404, 403
    // if (!res.ok) throw new Error(res.statusText);

    return res.json();
}