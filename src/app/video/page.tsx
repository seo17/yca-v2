import ResultComponent from "@/components/ResultComponent";
import React from "react";

import { auth } from "@clerk/nextjs/server";

async function VideoPage({
  searchParams,
}: {
  searchParams: { id: string; title: string };
}) {
  const { id: videoId, title } = searchParams;
  const { userId } = auth();

  return (
    <main className="text-copy">
      <div className="h-screen pt-10 px-5 md:px-7 lg:px-10">
        <div className="max-w-[1080px] flex flex-col items-center gap-5">
          <h1 className="text-center text-xl md:text-3xl lg:text-4xl font-bold text-copy">
            {`${title}`}
          </h1>
          <div className="w-full">
            <ResultComponent userId={userId as string} videoId={videoId} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default VideoPage;
