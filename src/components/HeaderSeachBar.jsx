import React from "react";
import searchicon from "../assets/search icon.png";

function HeaderSeachBar() {
  return (
    <div className="flex justify-center">
      <div className="flex border-2 rounded-full shadow-md gap-3">
        <div className="px-2 py-2 items-center text-sm  rounded-full hover:bg-gray-100">
          <h1 className="text-xs  px-3">Where</h1>
          <input
            type="text"
            placeholder="Search destination"
            className="border-none outline-none text-sm bg-transparent"
          />
        </div>
        <button className="py-4 px-4  text-sm rounded-full border-none outline-none hover:bg-gray-100 text-left">
          <h1 className="text-xs">Check in</h1>
          <h1 className="text-gray-400">Add dates</h1>
        </button>
        <button className="py-4 px-4  text-sm rounded-full border-none outline-none hover:bg-gray-100 text-left">
          <label className="text-xs">Check in</label>
          <h1 className="text-gray-400">Add dates</h1>
          {/* <input type="text" onfocus="(this.type='date')" placeholder='add date' className='text-gray-400 border-none outline-none bg-transparent'/> */}
        </button>
        <button className="flex py-3 px-4 items-center text-sm rounded-full border-none outline-none hover:bg-gray-100 text-left">
          <div className="flex w-40 px-4 flex-col">
            <h1 className="text-xs">Who</h1>
            <h1 className="text-gray-400 ">Add guests</h1>
          </div>
          <div className="bg-[#ff385c] px-3 py-3 rounded-full hover:bg-[#DF1461]">
            <img src={searchicon} className="w-5 h-5" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default HeaderSeachBar;
