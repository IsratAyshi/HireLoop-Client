import { redirect } from "next/navigation";
import { auth } from "../auth";
import { headers } from "next/headers";

export const getUserSession = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // some endpoints might require headers
    })

    // console.log("Session data in getUserSession:", session);

    return session?.user || null;
}

// get session token from session collection in database created by better-auth
export const getUserToken = async () => {
    const session = await auth.api.getSession({
        headers: await headers() 
    })

    return session?.session?.token || null;
}

export const requireRole = async (role) => {
    const user = await getUserSession();

    if (!user) {
        redirect('/auth/signin');
    }
    
    if (user?.role !== role) {
        // throw new Error('Unauthorized');
        redirect('/unauthorized');
    }
    return user;
}