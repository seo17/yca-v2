import ResultComponent from "@/components/ResultComponent";
import VideoPlayer from "@/components/VideoPlayer";
import React from "react";

function VideoPage({ searchParams }: { searchParams: { id: string } }) {
  const { id } = searchParams;

  console.log(id);

  return (
    <main className="text-copy">
      <div className="w-screen h-screen pt-10 px-5 md:px-7 lg:px-10">
        <div className="flex flex-col items-start gap-5">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-copy">
            Title
          </h1>
          <div>
            <ResultComponent />
          </div>
        </div>
      </div>
    </main>
  );
}

export default VideoPage;
