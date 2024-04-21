import React, { useEffect, useState } from "react";
import Placeoffer from "../components/Placeoffer";
import AdsDetailCraosal from "../components/AdsDetailCraosal";
import useFireStoreData from "../Hooks/fireStoreData";
import detail1 from "../assets/detail1.jpg";
import detail3 from "../assets/detail3.jpeg";
import detail4 from "../assets/detail4.jpg";
import detail5 from "../assets/detail5.jpeg";
import { getAuth } from "firebase/auth";
import randomProfile from "../assets/profile pic.webp";
function AdsDetail() {
  const { adsData, adsDetail } = useFireStoreData();
  const [profilePic, setprofilePic] = useState("");
  const auth = getAuth();
  useEffect(() => {
    if (auth.currentUser.photoURL !== null) {
      setprofilePic(auth.currentUser.photoURL);
    } else {
      setprofilePic(randomProfile);
    }
  }, [auth.currentUser.photoURL]);
  return (
    <>
      <div className="px-5 md:px-36">
        <h1 className="mt-4 text-lg md:text-xl font-semibold ">
          {/* Sooty's Hideout ~ Beat the Blues Room */}
          {adsData[adsDetail].placeName.toUpperCase()}
        </h1>
        {/* mobile devices craosal */}
        <AdsDetailCraosal />
        {/* medium and large devices image gallery */}
        <div className="hidden md:flex  my-3 justify-center">
          <div className="mr-2">
            <img
              src={
                adsData[adsDetail].image[0]
                  ? adsData[adsDetail].image[0]
                  : detail5
              }
              alt=""
              className="w-full md:w-[560px] h-[310px] rounded-l-lg"
            />
          </div>
          <div className="grid grid-cols-2 gap-x-2 gap-y-1">
            <img
              src={
                adsData[adsDetail].image[1]
                  ? adsData[adsDetail].image[1]
                  : detail4
              }
              alt=""
              className="w-[272px] h-[150px]"
            />
            <img
              src={
                adsData[adsDetail].image[2]
                  ? adsData[adsDetail].image[2]
                  : detail3
              }
              alt=""
              className="w-[272px] h-[150px] rounded-r-lg"
            />
            <img
              src={
                adsData[adsDetail].image[3]
                  ? adsData[adsDetail].image[3]
                  : detail1
              }
              alt=""
              className="w-[272px] h-[150px]"
            />
            <img
              src={
                adsData[adsDetail].image[4]
                  ? adsData[adsDetail].image[4]
                  : detail5
              }
              alt=""
              className="w-[272px] h-[150px] rounded-r-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between">
          <div className="md:w-[655px]">
            <h1 className="text-lg font-medium my-1">
              Room in {adsData[adsDetail].location} {adsData[adsDetail].city},
              Pakistan
            </h1>
            <div className="text-sm">
              <span>{adsData[adsDetail].bed} bed</span>{" "}
              <span className="text-start">.</span>{" "}
              <span>{adsData[adsDetail].bedroom} Bedroom</span>{" "}
              <span className="text-start">. </span>
              <span>{adsData[adsDetail].bathrom} Bathroom</span>
            </div>
            <hr className="my-4 " />
            <div className="flex gap-4">
              <div>
                <img src={profilePic} alt="" className="w-10 rounded-full" />
              </div>
              <div>
                <h1 className="font-medium">
                  Hosted by {adsData[adsDetail].host}
                </h1>
                <p className="text-sm">2 years hosting</p>
              </div>
            </div>
            <hr className="my-4 " />
            <div>
              <h1 className="text-xl font-medium py-4">About this place</h1>
              <p>{adsData[adsDetail].aboutPlace}</p>
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
