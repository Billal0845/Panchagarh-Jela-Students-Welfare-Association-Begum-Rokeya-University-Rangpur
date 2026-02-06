import React from "react";
import AdminLayout from "../../layouts/AdminLayout/AdminLayout";
import { Head } from "@inertiajs/react";

function Dashboard() {
    return (
        <div className="font-poppins pb-10">
            <Head title="Admin Dashboard" />
            <h1>Admin Panel</h1>
        </div>
    );
}

Dashboard.layout = (page) => <AdminLayout children={page} />;
export default Dashboard;
