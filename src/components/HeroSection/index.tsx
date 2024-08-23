"use client";

import React from "react";

function HeroSection() {
  return (
    <section>
      <div className="w-full max-w-[1080px] flex flex-col items-center justify-center py-20 gap-10">
        <div>
          <h1 className="lg:text-7xl font-bold text-primary-dark text-center">
            YCA: Unlock the Power of Your YouTube Comments
          </h1>
          <div>
            <p className="text-center text-base text-copy">
              Are you drowning in a sea of YouTube comments, struggling to make
              sense of your audience's feedback? Say hello to YCA - Your YouTube
              Comment Analyzer!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
