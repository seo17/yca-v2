import React from "react";
import VideoCard from "../VideoCard";

function DashboardContent() {
  return (
    <main>
      <div className="px-5 md:px-7 lg:px-10">
        <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-copy">
          Dashboard
        </h3>

        <VideoCard />

        <div className="flex flex-col justify-center items-center gap-3">
          <p className="text-copy">Add a youtube video link to get started</p>
        </div>
      </div>
    </main>
  );
}

export default DashboardContent;
