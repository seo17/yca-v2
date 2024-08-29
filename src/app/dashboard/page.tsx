import DashboardContent from "@/components/DashboardContent";
import DashboardTopNav from "@/components/DashboardTopNav";
import React from "react";

import { currentUser, auth } from "@clerk/nextjs/server";
import { getAllVideos } from "@/action";

async function DashboardPage() {
  const user = await currentUser();

  const allVideo = await getAllVideos(user?.id as string);

  return (
    <div>
      <DashboardTopNav />
      <DashboardContent video={allVideo?.videos as any[]} />
    </div>
  );
}

export default DashboardPage;
