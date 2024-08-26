import { analysisLinks } from "@/lib";
import Link from "next/link";
import React from "react";

function VideoCard() {
  return (
    <div className="rounded-xl bg-foreground border border-border p-3 flex flex-col gap-5">
      <h5 className="text-xl font-semibold">Default Title</h5>
      <ul className="w-fit flex flex-row flex-wrap items-center justify-center gap-2 list-inside">
        {analysisLinks.map((item, index) => (
          <li key={index}>
            <Link
              className="text-copy-light text-[14px] underline hover:text-primary-dark"
              href={item.path}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VideoCard;
