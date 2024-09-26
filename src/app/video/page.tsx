import ResultComponent from "@/components/ResultComponent";
import React from "react";

import { auth } from "@clerk/nextjs/server";
import {
  getSentiment,
  getThumbnail,
  getVideoDetails,
  storeVideo,
} from "@/action";
import VideoComponent from "@/components/VideoComponent";

async function VideoPage({
  searchParams,
}: {
  searchParams: { id: string; title: string; selectedSentiment?: string };
}) {
  // Get video id, title and sentiment option (optional) from route search params
  const { id: videoId, title, selectedSentiment } = searchParams;
  const { userId } = auth();

  // Initialize variable to store sentiment from db or api
  let sentiment;

  // Search for video detail on db
  const resultFromDb = await getVideoDetails(userId as string, videoId);

  // If video is not found on db, get sentiment, thumbnail and other from api
  // then save to db
  if (resultFromDb?.notFound) {
    const result = await getSentiment(videoId);
    const thumbnail = await getThumbnail(videoId);

    // Declare value of initialized sentiment to api result
    sentiment = result?.sentiment;

    if (sentiment && thumbnail)
      storeVideo({
        userId: userId as string,
        videoId,
        title,
        thumbnail,
        sentiment: sentiment,
      });
  } else {
    // Declare value of initialized sentiment to db result
    sentiment = resultFromDb?.sentiment;
  }

  return (
    <main className="text-copy">
      <div className="py-10 px-5 md:px-7 lg:px-10">
        <div className="max-w-[1080px] flex flex-col items-center gap-5">
          <VideoComponent videoId={videoId} />
          <h1 className="text-center text-xl md:text-3xl lg:text-4xl font-bold text-copy">
            {`${title}`}
          </h1>
          <div className="w-full">
            <ResultComponent
              sentiment={sentiment}
              selectedSentiment={selectedSentiment}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default VideoPage;
