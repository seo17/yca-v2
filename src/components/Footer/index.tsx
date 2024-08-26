import React from "react";

function Footer() {
  return (
    <footer className="w-full  bg-primary-dark">
      <div className="max-w-[1080px] mx-auto">
        <div className="w-full py-10 px-5 md:p-10">
          <div className="w-full flex flex-row justify-between items-center">
            <div>
              <p className="font-bold text-2xl text-primary-content">YCA</p>
            </div>

            <div className="hidden md:flex flex-row items-center gap-5 text-base text-copy">
              <p className="text-primary-content">All rights reserverd ©</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
