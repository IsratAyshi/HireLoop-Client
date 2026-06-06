import React from 'react';
import CompanyProfile from './CompanyProfile';
import { getUserSession } from '@/lib/core/session';
import { getRecruiterCompany } from '@/lib/api/companies';


const CompanyPage = async () => {

    const user = await getUserSession();
    const company = await getRecruiterCompany(user?.id);

    return (
        <div>
            <CompanyProfile recruiter={user} recruiterCompany={company}></CompanyProfile>
        </div>
    );
};

export default CompanyPage;

//CompanyPage is server side component, thats why we could use async. User side component can't be made async