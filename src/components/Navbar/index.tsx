"use client";
import Link from "next/link";
import React from "react";
import MobileNavButton from "../MobileNavButton";
import { navItems } from "@/lib";

function Navbar() {
  return (
    <header className="w-full max-w-[1080px]">
      <nav className="w-full">
        <div className="w-full py-10 px-5 md:p-10">
          <div className="w-full flex flex-row justify-between items-center">
            <div>
              <p className="font-bold text-2xl text-primary-dark">YCA</p>
            </div>

            <div className="hidden md:flex flex-row items-center gap-5 text-base text-copy">
              {navItems.map((item, index) =>
                item.label !== "Get Started" ? (
                  <Link
                    key={index}
                    href={item.path}
                    className="hover:underline"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Link
                    key={index}
                    href={item.path}
                    className="p-2 bg-primary-dark text-foreground rounded-lg hover:bg-primary"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>

            {/* Smaller Screen Nav Option */}
            <MobileNavButton />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
