import { requireRole } from '@/lib/core/session';
import React from 'react';

const RecruiterLayout = async ({ children }) => {
    // let only recruiter to access recruiter dashboard
    await requireRole('recruiter');
    return children;
};

export default RecruiterLayout;