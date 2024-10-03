import DashboardContent from "@/components/DashboardContent";
import DashboardTopNav from "@/components/DashboardTopNav";
import React from "react";

import { currentUser, auth } from "@clerk/nextjs/server";

export const runtime = "edge";

async function DashboardPage() {
  const user = await currentUser();

  return (
    <div className="w-full h-screen">
      <DashboardTopNav />
      <DashboardContent userId={user?.id as string} />
    </div>
  );
}

export default DashboardPage;
