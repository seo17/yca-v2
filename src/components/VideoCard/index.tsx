import { analysisLinks } from "@/lib";
import Link from "next/link";
import React from "react";

function VideoCard({
  title,
  userId,
  videoId,
}: {
  title: string;
  userId: string;
  videoId: string;
}) {
  return (
    <div className="rounded-xl bg-foreground border border-border p-3 flex flex-col gap-5 justify-between items-center sm:items-start w-full h-[200px]">
      <h5 className="w-fit text-xl font-semibold text-center sm:text-start text-copy">
        {title}
      </h5>
      <div className="w-full flex flex-row justify-center sm:justify-start gap-2">
        {analysisLinks.map((item, index) => (
          <div key={index}>
            <Link
              className="text-copy-light text-[14px] underline hover:text-primary-dark"
              href={`/video?id=${videoId}&title=${title}`}
            >
              {item.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoCard;
