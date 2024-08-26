import { Search } from "lucide-react";
import React from "react";

function SearchComponent() {
  return (
    <div className="bg-foreground flex flex-row items-center justify-center gap-2 rounded-2xl p-2">
      <Search size={20} />

      <input
        className="bg-foreground outline-none"
        placeholder="Search for video title...."
      />
    </div>
  );
}

export default SearchComponent;
