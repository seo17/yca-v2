"use server";

import { connectToMongoDB } from "@/db";
import Video from "@/model";

const apiKey = process.env.API_KEY!;

const apiGeneralEndpoint = "http://comment-insights.onrender.com/result/";
const apiPositiveEndpoint = "http://comment-insights.onrender.com/positive/";
const apiNegativeEndpoint = "http://comment-insights.onrender.com/positive/";

type VideoInfo = {
  userId: string;
  videoId: string;
  title: string;
  sentiment: {
    general: string;
    positive: string;
    negative: string;
  };
};

export async function getTitle(videoId: string) {
  const apiTitleEndpoint = "http://comment-insights.onrender.com/title/";

  try {
    const response = await fetch(apiTitleEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: apiKey,
      },
      body: JSON.stringify({ text: videoId }),
    });
    const result = await response.json();

    return result?.result || "Title Not Found";
  } catch (error) {
    console.error("Error", error);
  }
}

export async function getSentiment(userId: string, videoId: string) {
  try {
    let result = await Promise.all([
      getGeneralSentiment(userId, videoId),
      getPositiveSentiment(userId, videoId),
      getNegativeSentiment(userId, videoId),
    ]);

    return {
      sentiment: {
        general: result[0] as string,
        positive: result[1] as string,
        negative: result[2] as string,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

async function getGeneralSentiment(userId: string, videoId: string) {
  // General Sentiment
  try {
    const response = await fetch(apiGeneralEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: apiKey,
      },
      body: JSON.stringify({ text: videoId }),
    });
    const generalResult = await response.json();

    return generalResult?.result;
  } catch (error) {
    console.error("Error", error);
  }
}

async function getPositiveSentiment(userId: string, videoId: string) {
  // Positive Sentiment
  try {
    const response = await fetch(apiPositiveEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: apiKey,
      },
      body: JSON.stringify({ text: videoId }),
    });
    const positiveResult = await response.json();

    return positiveResult?.result;
  } catch (error) {
    console.error("Error", error);
  }
}

async function getNegativeSentiment(userId: string, videoId: string) {
  const apiNegativeEndpoint = "http://comment-insights.onrender.com/result/";

  // Negative Sentiment
  try {
    const response = await fetch(apiNegativeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: apiKey,
      },
      body: JSON.stringify({ text: videoId }),
    });
    const negativeResult = await response.json();

    return negativeResult?.result;
  } catch (error) {
    console.error("Error", error);
  }
}

export async function storeVideo(docObj: VideoInfo) {
  await connectToMongoDB();

  try {
    const newVideo = await Video.create(docObj);

    newVideo.save();

    return newVideo;
  } catch (error) {
    console.log(error);
    return { error: "Error creating video" };
  }
}

export async function getVideoDetails(userId: string, videoId: string) {
  try {
    await connectToMongoDB();
    const details = await Video.findOne({ videoId, userId });

    if (details) return JSON.parse(JSON.stringify(details));
    else return { message: "no such video found on this account" };
  } catch (error) {
    console.log(error);
    return { error: "Error fetching all videos" };
  }
}

export async function getAllVideos(userId: string) {
  try {
    await connectToMongoDB();
    const videos = await Video.find({ userId });

    // Convert each Mongoose document to a plain JavaScript object
    const plainVideos = videos.map((video) => video.toObject());

    return JSON.parse(JSON.stringify({ videos: plainVideos }));
  } catch (error) {
    console.log(error);
    return { error: "Error fetching all videos" };
  }
}
