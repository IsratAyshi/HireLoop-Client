import React from 'react';
import { getApplicationsByApplicant } from '@/lib/api/applications';
import { getUserSession } from '@/lib/core/session';
import ApplicationsTable from './ApplicationTable';


const ApplicationsPage = async () => {
    const user = await getUserSession();
    const jobs = await getApplicationsByApplicant(user.id)

    return (
        <div>
            {/* <h2>Applications {jobs.length}</h2> */}
            <ApplicationsTable jobs={jobs}></ApplicationsTable>
        </div>
    );
};

export default ApplicationsPage;