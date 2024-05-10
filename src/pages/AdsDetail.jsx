import React, { useEffect, useState } from "react";
import Placeoffer from "../components/Placeoffer";
import AdsDetailCraosal from "../components/AdsDetailCraosal";
import useFireStoreData from "../Hooks/fireStoreData";
import randomProfile from "../assets/profile pic.webp";
import { Spinner } from "@material-tailwind/react";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../Firebase/config";
import ImageGallery from "../Modals/ImageGallery";
import { useParams } from "react-router-dom";
function AdsDetail() {
  const [loading, setloading] = useState(true);
  const [adsDatas, setadsData] = useState();
  const paramid = useParams();

  const getAdsData = async () => {
    try {
      const docRef = doc(database, "Ads", paramid.id);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      setadsData(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAdsData();
  }, []);

  useEffect(() => {
    adsDatas && adsDatas && adsDatas.placeName != undefined
      ? setloading(false)
      : setloading(true);
  }, [adsDatas, adsDatas]);

  const { handleGallery } = useFireStoreData();

  return (
    <>
      {adsDatas && (
        <div className="hidden md:block">
          <ImageGallery images={adsDatas.image} />
        </div>
      )}
      {adsDatas && (
        <div className="px-5  md:px-36">
          <h1 className="mt-4 text-lg md:text-xl font-semibold ">
            {/* Sooty's Hideout ~ Beat the Blues Room */}
            {adsDatas.placeName.toUpperCase()}
          </h1>
          {/* mobile devices craosal */}
          <AdsDetailCraosal image={adsDatas.image} />
          {/* medium and large devices image gallery */}
          <div
            onClick={handleGallery}
            className="relative hidden md:flex my-3 cursor-pointer"
          >
            <div className="mr-2 ">
              {adsDatas.image[0] && (
                <img
                  src={adsDatas.image[0]}
                  alt=""
                  className={` ${
                    !adsDatas.image[1]
                      ? "w-[60vw] h-[310px]"
                      : "md:w-[560px] h-[310px]"
                  } rounded-l-lg`}
                />
              )}
            </div>
            {adsDatas.image[1] && (
              <div className=" grid grid-cols-2 gap-x-2 gap-y-1">
                {adsDatas.image[1] && (
                  <img
                    src={adsDatas.image[1]}
                    alt=""
                    className="w-[272px] h-[150px]"
                  />
                )}
                {adsDatas.image[2] && (
                  <img
                    src={adsDatas.image[2]}
                    alt=""
                    className="w-[272px] h-[150px] rounded-r-lg"
                  />
                )}
                {adsDatas.image[3] && (
                  <img
                    src={adsDatas.image[3]}
                    alt=""
                    className="w-[272px] h-[150px]"
                  />
                )}

                {adsDatas.image[4] && (
                  <div>
                    <img
                      src={adsDatas.image[4]}
                      alt=""
                      className=" w-[272px] h-[150px] rounded-r-lg"
                    />
                  </div>
                )}
              </div>
            )}
            <div className=" absolute md:right-2 lg:right-2 xl:right-8 2xl:right-8   bottom-4 ">
              <button
                onClick={handleGallery}
                className="relative text-sm h-10 px-2 py-2 border-2 border-black bg-white rounded shadow-lg text-black"
              >
                Show all photos
              </button>
            </div>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 justify-between">
            <div className="md:w-[655px]">
              <h1 className="text-lg font-medium my-1">
                Room in {adsDatas.location} {adsDatas.city}, Pakistan
              </h1>
              <div className="text-sm">
                <span>{adsDatas.bed} bed</span>{" "}
                <span className="text-start">.</span>{" "}
                <span>{adsDatas.bedroom} Bedroom</span>{" "}
                <span className="text-start">. </span>
                <span>{adsDatas.bathrom} Bathroom</span>
              </div>
              <hr className="my-4 " />
              <div className="flex gap-4">
                <div>
                  <img
                    src={randomProfile}
                    alt=""
                    className="w-10 rounded-full"
                  />
                </div>
                <div>
                  <h1 className="font-medium">Hosted by {adsDatas.host}</h1>
                  <p className="text-sm">2 years hosting</p>
                </div>
              </div>
              <hr className="my-4 " />
              <div>
                <h1 className="text-xl font-medium py-4">About this place</h1>
                <p>{adsDatas.aboutPlace}</p>
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
      )}

      {loading && (
        <div className="flex w-full justify-center items-center h-[80vh]">
          <Spinner color="pink" className="h-40 w-16" />
        </div>
      )}
    </>
  );
}

export default AdsDetail;
