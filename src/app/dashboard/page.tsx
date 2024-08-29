import DashboardContent from "@/components/DashboardContent";
import DashboardTopNav from "@/components/DashboardTopNav";
import React from "react";

import { currentUser, auth } from "@clerk/nextjs/server";

async function DashboardPage() {
  const user = await currentUser();

  return (
    <div>
      <DashboardTopNav />
      <DashboardContent userId={user?.id as string} />
    </div>
  );
}

export default DashboardPage;
