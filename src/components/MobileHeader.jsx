import React from "react";
import searchicon from "../assets/search icon black.png";

function MobileHeader() {
  return (
    <div className=" block md:hidden">
      <div className="flex justify-center mt-4 ">
        <div className="rounded-full items-center  p-3  flex shadow-md">
          <img className="w-6 h-8" src={searchicon} alt="" />
          <div className="flex ml-4 flex-col">
            <input
              className="text-sm placeholder-black font-bold bg-transparent px-0 py-0 outline-none border-none"
              type="text"
              placeholder="Anywhere"
            />
            <input
              className="text-sm bg-transparent px-0 py-0 outline-none border-none"
              type="text"
              placeholder="Any week"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;
