import { Search } from "lucide-react";
import React from "react";

function SearchComponent() {
  return (
    <div className="w-full text-copy bg-foreground flex flex-row items-center sm:justify-center gap-2 rounded-lg p-2">
      <Search size={20} />

      <input
        className="w-full  bg-foreground outline-none"
        placeholder="Search for video title...."
      />
    </div>
  );
}

export default SearchComponent;
