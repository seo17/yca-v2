"use client";
import React, { useEffect, useState } from "react";
import VideoCard from "../VideoCard";
import { getAllVideos } from "@/action";

import { ThreeDots } from "react-loader-spinner";
import ButtonDialog from "../ButtonDialog";

function DashboardContent({ userId }: { userId: string }) {
  const [videoArray, setVideoArray] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function getVideos() {
      const allVideo = await getAllVideos(userId);
      if (allVideo?.videos) setVideoArray(allVideo?.videos);
    }

    getVideos();
    setIsLoading(false);
  }, []);
  return (
    <main>
      <div className="px-5 md:px-7 lg:px-10">
        <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-copy">
          Dashboard
        </h3>

        {isLoading ? (
          <div className="w-[full] flex flex-col justify-center items-center h-[70vh]">
            <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="#2865c8"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : videoArray && videoArray.length > 0 ? (
          <div className="my-3 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 grid-flow-cols">
            {videoArray.map((item, index) => (
              <VideoCard
                key={index}
                title={item?.title}
                userId={item?.userId}
                videoId={item?.videoId}
                thumbnail={item?.thumbnail}
              />
            ))}
          </div>
        ) : (
          <div className="w-full h-[78vh] flex flex-col justify-center items-center gap-3">
            <p className="text-center text-base text-secondary-content">
              Add a YouTube video link to get started
            </p>
            <ButtonDialog />
          </div>
        )}
      </div>
    </main>
  );
}

export default DashboardContent;
