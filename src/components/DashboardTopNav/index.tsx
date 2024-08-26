"use client";

import React from "react";
import { UserButton } from "@clerk/nextjs";
import SearchComponent from "../SearchComponent";
import ButtonDialog from "../ButtonDialog";

function DashboardTopNav() {
  return (
    <header className="w-screen">
      <nav>
        <div className="">
          <div className="w-full  flex flex-row items-center justify-between px-5 py-7 md:px-7 lg:px-10 ">
            <div className="">
              <SearchComponent />
            </div>

            <div className="flex flex-row items-center justify-center gap-5">
              <ButtonDialog />
              <UserButton />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default DashboardTopNav;
