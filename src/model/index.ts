import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    videoId: {
      type: String,
      required: true,
    },
    sentiment: { general: String, positive: String, negative: String },
    createdAt: Date,
    updatedAt: Date,
  },
  {
    timestamps: true,
  }
);

// Creating a mongoose model for the video document
const Video = mongoose.models?.Video || mongoose.model("Video", videoSchema);

export default Video;
