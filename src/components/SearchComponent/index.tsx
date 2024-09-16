import { Search } from "lucide-react";
import React from "react";

function SearchComponent() {
  return (
    <div className="w-full text-copy bg-background flex flex-row items-center sm:justify-center gap-2 rounded-lg p-2">
      <Search size={20} color="#232629" />

      <input
        className="w-full  bg-background outline-none"
        placeholder="Search for video title...."
      />
    </div>
  );
}

export default SearchComponent;
