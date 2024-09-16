"use client";
import { analysisLinks } from "@/lib";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function VideoCard({
  title,
  userId,
  videoId,
  thumbnail,
}: {
  title: string;
  userId: string;
  videoId: string;
  thumbnail?: string;
}) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/video?id=${videoId}&title=${title}`)}
      className="rounded-xl bg-foreground border border-border flex flex-col gap-px justify-start items-center sm:items-start w-full hover:shadow-xl hover:shadow-primary-dark/20"
    >
      <div className="w-full">
        <img
          className="w-full object-cover rounded-t-xl"
          src={thumbnail}
          alt={`Youtube thumbnail for ${title}`}
        />
      </div>

      {/* Video Title and Sentiment Links */}
      <div className="p-2 flex flex-col justify-between w-full h-full">
        <h5 className="w-fit text-[14px] sm:text-base font-semibold text-start text-copy">
          {title}
        </h5>
        <div className="w-full flex flex-row justify-start gap-2">
          {analysisLinks.map((item, index) => (
            <div key={index}>
              <Link
                className="text-copy-light text-[14px] underline hover:text-primary-dark"
                href={`/video?id=${videoId}&title=${title}&selectedSentiment=${item.label.toLowerCase()}`}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
