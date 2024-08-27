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

function ButtonDialog() {
  const [open, setOpen] = useState(false);

  const handleAddVideo = async () => {};

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <div className="font-bold  bg-primary-dark text-primary-content px-3 py-2 rounded-lg hover:bg-primary">
            <div className="flex flex-row gap-px">
              <Plus /> <span>Add Video</span>
            </div>
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
                placeholder="https://www.youtube.com/..."
                className="col-span-3"
                type="url"
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleAddVideo} type="submit">
              Add
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ButtonDialog;
