"use server";

import { connectToMongoDB } from "@/db";
import Video from "@/model";

const apiKey = process.env.API_KEY!;

const apiGeneralEndpoint = "http://comment-insights.onrender.com/result/";
const apiPositiveEndpoint = "http://comment-insights.onrender.com/positive/";
const apiNegativeEndpoint = "http://comment-insights.onrender.com/positive/";

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

    console.log("title", result);

    return result?.result || "Title Not Found";
  } catch (error) {
    console.error("Error", error);
  }
}

export async function getGeneralSentiment(userId: string, videoId: string) {
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

    console.log("General result", generalResult);

    return generalResult?.result;
  } catch (error) {
    console.error("Error", error);
  }
}

export async function getPositiveSentiment(userId: string, videoId: string) {
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
    const generalResult = await response.json();

    console.log("General result", generalResult);

    return generalResult?.result;
  } catch (error) {
    console.error("Error", error);
  }
}

export async function getNegativeSentiment(userId: string, videoId: string) {
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
    const generalResult = await response.json();

    console.log("General result", generalResult);

    return generalResult?.result;
  } catch (error) {
    console.error("Error", error);
  }
}

// export async function storeVideo(userId: string, videoId: string) {
//   const title = await getTitle(videoId);

//   await connectToMongoDB();

//   try {
//     const newVideo = await Video.create({
//       userId,
//       videoId,
//       title,
//     });

//     newVideo.save();

//     // return { message: "success", videoId, title, sentiment };
//     console.log(newVideo);
//     return newVideo;
//   } catch (error) {
//     console.log(error);
//     return { error: "Error creating video" };
//   }
// }

// export async function getVideoDetails(userId: string, videoId: string) {
//   try {
//     await connectToMongoDB();
//     const details = await Video.findOne({ videoId, userId });

//     console.log(details);

//     return details;
//   } catch (error) {
//     console.log(error);
//     return { error: "Error fetching all videos" };
//   }
// }

// export async function getAllVideos(userId: string) {
//   try {
//     await connectToMongoDB();
//     const videos = await Video.find({ userId });

//     return { videos };
//   } catch (error) {
//     console.log(error);
//     return { error: "Error fetching all videos" };
//   }
// }
