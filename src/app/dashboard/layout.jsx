import Navbar from "@/ui/dashboard/navbar/navbar";
import Sidebar from "@/ui/dashboard/sidebar/sidebar";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="flex max-w-screen min-w-full min-h-screen h-full">
      <div className="w-1/5 bg-[#182237] p-5">
        <Sidebar />
      </div>

      <div className="w-4/5 p-5">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
