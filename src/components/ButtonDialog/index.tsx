"use client";
import { Plus } from "lucide-react";
import React, { useState } from "react";

function ButtonDialog() {
  const [open, setOpen] = useState(false);

  const handleOnClick = async () => {};

  return (
    <>
      <button
        onClick={handleOnClick}
        className="font-bold  bg-primary-dark text-primary-content px-3 py-2 rounded-lg hover:bg-primary"
      >
        <div className="flex flex-row gap-px">
          <Plus /> <span>Add Video</span>
        </div>
      </button>
    </>
  );
}

export default ButtonDialog;
