import React from "react";
import SideNav from "../ui/dashboard/sidenav";
import '../global.css'

export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full md:w-1/5 flex-none">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">

                {children}
            </div>
        </div>
    )
}