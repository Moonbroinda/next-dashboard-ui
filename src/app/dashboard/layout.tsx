import React from "react";

export default function DashboardLayout ({
    children,
}:Readonly<{children: React.ReactNode;}>) {
    return <div>dashboard{children}</div>
}