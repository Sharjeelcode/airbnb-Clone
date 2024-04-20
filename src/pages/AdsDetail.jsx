import React, { useState } from "react";
import Placeoffer from "../components/Placeoffer";
import AdsDetailCraosal from "../components/AdsDetailCraosal";

function AdsDetail(prop) {
  return (
    <>
      <div className="px-5 md:px-36">
        <h1 className="mt-4 text-lg md:text-xl font-semibold ">
          Sooty's Hideout ~ Beat the Blues Room
        </h1>
        {/* mobile devices craosal */}
        <AdsDetailCraosal />
        {/* medium and large devices image gallery */}
        <div className="hidden md:flex  my-3 justify-center">
          <div className="mr-2">
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-614375154474735110/original/7e7f4c4a-c496-4844-bd02-44e276b41718.jpeg?im_w=960"
              alt=""
              className="w-full md:w-[560px] h-[310px] rounded-l-lg"
            />
          </div>
          <div className="grid grid-cols-2 gap-x-2 gap-y-1">
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-614375154474735110/original/7e7f4c4a-c496-4844-bd02-44e276b41718.jpeg?im_w=960"
              alt=""
              className="w-[272px] h-[150px]"
            />
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-614375154474735110/original/7e7f4c4a-c496-4844-bd02-44e276b41718.jpeg?im_w=960"
              alt=""
              className="w-[272px] h-[150px] rounded-r-lg"
            />
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-614375154474735110/original/7e7f4c4a-c496-4844-bd02-44e276b41718.jpeg?im_w=960"
              alt=""
              className="w-[272px] h-[150px]"
            />
            <img
              src="https://a0.muscache.com/im/pictures/miso/Hosting-614375154474735110/original/7e7f4c4a-c496-4844-bd02-44e276b41718.jpeg?im_w=960"
              alt=""
              className="w-[272px] h-[150px] rounded-r-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between">
          <div className="md:w-[655px]">
            <h1 className="text-lg font-medium my-1">
              Room in Shangarh, India
            </h1>
            <div className="text-sm">
              <span>1 bed</span> <span className="text-start">.</span>{" "}
              <span>1 Bedroom</span> <span className="text-start">. </span>
              <span>1 Bathroom</span>
            </div>
            <hr className="my-4 " />
            <div className="flex gap-4">
              <div>
                <img
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-614375154474735110/original/7e7f4c4a-c496-4844-bd02-44e276b41718.jpeg?im_w=960"
                  alt=""
                  className="w-10 rounded-full"
                />
              </div>
              <div>
                <h1 className="font-medium">Hosted by Shagun</h1>
                <p className="text-sm">2 years hosting</p>
              </div>
            </div>
            <hr className="my-4 " />
            <div>
              <h1 className="text-xl font-medium py-4">About this place</h1>
              <p>sdjgh</p>
            </div>
            <hr className="my-4 " />
            <div className="">
              <h1 className="text-xl font-medium py-4">
                What this place offers
              </h1>
              <Placeoffer />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default AdsDetail;
