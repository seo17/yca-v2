"use client";
import { Plus } from "lucide-react";
import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { extractYouTubeVideoID } from "@/utils";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";
import { getTitle } from "@/action";

function ButtonDialog() {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");
  const router = useRouter();

  const handleAddVideo = async () => {
    console.log("started adding");
    setIsLoading(true);
    const getVideoId = extractYouTubeVideoID(url);
    const title = await getTitle(getVideoId);

    console.log(title);

    if (getVideoId) router.push(`/video?id=${getVideoId}&title=${title}`);
    else toast.error("Make sure url is valid");
    setIsLoading(false);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <div className="font-bold  bg-primary-dark text-primary-content px-3 py-2 rounded-lg hover:bg-primary">
            Add Video
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-copy">
              Enter Youtube Video Link
            </DialogTitle>
            <DialogDescription>
              Enter Youtube Video url for comment analysis
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Youtube url
              </Label>
              <Input
                id="link"
                value={url}
                placeholder="https://www.youtube.com/..."
                className="col-span-3"
                type="url"
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              onClick={handleAddVideo}
              type="submit"
              disabled={isLoading}
              className={`${isLoading ? "disabled:bg-copy/25" : ""}`}
            >
              {isLoading ? "Adding" : "Add"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ButtonDialog;
