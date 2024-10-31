import Card from "@/components/dashboard/card/card";
import Chart from "@/components/dashboard/chart/chart";
import Rightbar from "@/components/dashboard/rightbar/rightbar";
import Transaction from "@/components/dashboard/transaction/transaction";
import React from "react";

export default function DashboardPage() {
  return (
    <div className="w-full h-full flex gap-4">
      <div className="w-full xl:w-5/6 space-y-4">
        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card />
          <Card />
          <Card />
        </div>

        {/* Transactions Table Section */}
          <Transaction />

        {/* Chart Section */}
          <Chart />
      </div>









      <div className="hidden xl:w-1/6 xl:block">
        <Rightbar />
      </div>
    </div>
  );
}
