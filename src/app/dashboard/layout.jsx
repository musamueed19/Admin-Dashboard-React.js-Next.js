import Navbar from "@/components/dashboard/navbar/navbar";
import Sidebar from "@/components/dashboard/sidebar/sidebar";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="flex w-full h-full">
      <div className="w-1/5 bg-[#182237] p-5 h-full">
        <Sidebar />
      </div>

      <div className="w-4/5 p-5 space-y-2">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
