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
          <div className="w-full  flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between gap-3 px-5 py-7 md:px-7 lg:px-10 ">
            <div className="w-full sm:w-fit">
              <SearchComponent />
            </div>

            <div className="w-full sm:w-fit flex flex-row items-center justify-between sm:justify-center sm:gap-5">
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
