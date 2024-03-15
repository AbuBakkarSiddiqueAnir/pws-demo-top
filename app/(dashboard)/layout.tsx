import React from "react";
import Sidebar from "./_components/sidebar/side-bar";
import OrganizationSidebar from "./_components/organization-sidebar";
import Navbar from "./_components/navbar";

interface DashboradLayoutProps {
  children: React.ReactNode;
}

export default function layout({ children }: DashboradLayoutProps) {
  return (
    <main className="h-full">
      <Sidebar />
      <div className="pl-16 h-full">
        <div className="flex gap-x-3 h-full">
          <OrganizationSidebar />

          <div className="h-full flex-1">
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
