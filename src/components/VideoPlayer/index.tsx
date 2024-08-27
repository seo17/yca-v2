"use client";

import React from "react";
import DashboardTopNav from "../DashboardTopNav";
import YouTube from "react-youtube";

function VideoPlayer({ id }: { id: string }) {
  return <YouTube videoId={id} iframeClassName="w-[60%] h-[60%] rounded-2xl" />;
}

export default VideoPlayer;
