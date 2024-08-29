import React from "react";
import VideoCard from "../VideoCard";

function DashboardContent({ video }: { video: any[] }) {
  return (
    <main>
      <div className="px-5 md:px-7 lg:px-10">
        <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-copy">
          Dashboard
        </h3>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-4 grid-flow-cols">
          {video ? (
            video.map((item, index) => (
              <VideoCard
                key={index}
                title={item?.title}
                userId={item?.userId}
                videoId={item?.videoId}
              />
            ))
          ) : (
            <div className="flex flex-col justify-center items-center gap-3">
              <p className="text-center text-base text-secondary-content">
                Add a youtube video link to get started
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default DashboardContent;
