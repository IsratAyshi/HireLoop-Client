import { auth } from "../auth";
import { getUserToken } from "./session";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


export const authHeader = async () => {
    const token = await getUserToken();
    const header = token ? {
        authorization: `Bearer ${token}`,
    } : {};

    return header;
}

export const serverFetch = async (path) => {
    const res = await fetch(`${baseUrl}${path}`);
    // handle 401, 404, 403
    return res.json();
}

export const protectedFetch = async(path) =>{
    const res = await fetch(`${baseUrl}${path}`, {
        headers: await authHeader()
    });


    // handle 401, 404, 403
    return res.json();
}

export const serverMutation = async (path, data, method = 'POST') => {
    const res = await fetch(`${baseUrl}${path}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            ...await authHeader() // spread operator to add any additional header like authorization token
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