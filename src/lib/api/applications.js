import { protectedFetch, serverFetch } from "../core/server";

export const getApplicationsByApplicant = async (applicantId) => {
    // return serverFetch(`/api/applications?applicantId=${applicantId}`);

    return protectedFetch(`/api/applications?applicantId=${applicantId}`);
}