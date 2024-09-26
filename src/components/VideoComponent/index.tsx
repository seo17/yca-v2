"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

export default function VideoComponent({ videoId }: { videoId: String }) {
  const [showLink, setShowLink] = useState(false);

  console.log(showLink);
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <Button
          variant="outline"
          onClick={() => setShowLink(!showLink)}
          className="flex items-center space-x-2 w-full sm:w-auto"
        >
          {showLink ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
          <span>{showLink ? "Hide" : "Show"} Video</span>
        </Button>
      </div>

      {showLink && (
        <div className="aspect-video w-full max-w-3xl mx-auto">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg shadow-lg"
          ></iframe>
        </div>
      )}
    </>
  );
}
