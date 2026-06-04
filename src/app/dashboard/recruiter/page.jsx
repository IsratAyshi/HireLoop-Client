"use client";
import { DashboardStats } from '@/components/dashboard/DashboardStats';
import { useSession } from '@/lib/auth-client';
import { Briefcase, Persons, Thunderbolt, CircleCheck } from '@gravity-ui/icons';

const RecruiterDashboardHomePage = () => {

    const { data: session, isPending } = useSession();

    if (isPending) {
        return <div>Loading...</div>;
    }

    const user = session?.user;
    console.log("Session data in RecruiterDashboardHomePage:", session);

    const recruiterStats = [
        { title: "Total Job Posts", value: "48", icon: Briefcase },
        { title: "Total Applicants", value: "1,284", icon: Persons },
        { title: "Active Jobs", value: "18", icon: Thunderbolt },
        { title: "Jobs Closed", value: "32", icon: CircleCheck },
    ];

    return (
        <div>
            <h1 className="text-4xl ml-4">Welcome back, {user?.name}</h1>
            <DashboardStats statsData={recruiterStats} />
        </div>
    ); ss
};

export default RecruiterDashboardHomePage; 