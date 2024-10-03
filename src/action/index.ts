"use server";

import { connectToMongoDB } from "@/db";
import Video from "@/model";

const apiKey = process.env.API_KEY!;

const apiGeneralEndpoint = "http://comment-insights.onrender.com/result/";
const apiPositiveEndpoint = "http://comment-insights.onrender.com/positive/";
const apiNegativeEndpoint = "http://comment-insights.onrender.com/positive/";
const apiTitleEndpoint = "http://comment-insights.onrender.com/title/";
const apiThumbnailEndpoint = "http://comment-insights.onrender.com/thumbnail/";

type VideoInfo = {
  userId: string;
  videoId: string;
  title: string;
  thumbnail: string;
  sentiment: {
    general: string;
    positive: string;
    negative: string;
  };
};

export async function getTitle(videoId: string) {
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

export async function getSentiment(videoId: string) {
  try {
    let result = await Promise.all([
      getGeneralSentiment(videoId),
      getPositiveSentiment(videoId),
      getNegativeSentiment(videoId),
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

async function getGeneralSentiment(videoId: string) {
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

async function getPositiveSentiment(videoId: string) {
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

async function getNegativeSentiment(videoId: string) {
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

export async function getThumbnail(videoId: string) {
  try {
    const response = await fetch(apiThumbnailEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: apiKey,
      },
      body: JSON.stringify({ text: videoId }),
    });
    const result = await response.json();

    return result?.result;
  } catch (error) {
    console.error("Error", error);
  }
}

// MongoDB Actions
export async function storeVideo(docObj: VideoInfo) {
  await connectToMongoDB();
  const { title, videoId, userId } = docObj;

  try {
    // Check if video already exists
    const result = await Video.findOne({ title, userId, videoId });

    if (result) {
      return { statusCode: 403, message: "Alread exists" };
    }

    // Store video if it does not exist
    const newVideo = await Video.create(docObj);

    newVideo.save();

    return { statusCode: 201, message: "created successfully" };
  } catch (error) {
    console.log(error);
    return { statusCode: 500, error: "Error creating video" };
  }
}

export async function getVideoDetails(userId: string, videoId: string) {
  try {
    await connectToMongoDB();
    const details = await Video.findOne({ videoId, userId });

    if (details) return JSON.parse(JSON.stringify(details));
    else return { notFound: true };
  } catch (error) {
    if (error instanceof Error) return { error: error?.message };
    else console.log("Error getting video details", error);
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
