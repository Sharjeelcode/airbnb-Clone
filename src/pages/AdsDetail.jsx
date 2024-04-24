import React, { useEffect, useState } from "react";
import Placeoffer from "../components/Placeoffer";
import AdsDetailCraosal from "../components/AdsDetailCraosal";
import useFireStoreData from "../Hooks/fireStoreData";
import detail1 from "../assets/detail1.jpg";
import detail3 from "../assets/detail3.jpeg";
import detail4 from "../assets/detail4.jpg";
import detail5 from "../assets/detail5.jpeg";
import randomProfile from "../assets/profile pic.webp";
import { Spinner } from "@material-tailwind/react";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../Firebase/config";
function AdsDetail() {
  const { adsDetail } = useFireStoreData();
  const [loading, setloading] = useState(true);
  const [adsData, setadsData] = useState();

  const getAdsData = async () => {
    try {
      const docRef = doc(database, "Ads", adsDetail);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      setadsData(data);
      localStorage.setItem("adsData", JSON.stringify(data));
    } catch (error) {
      const prevAds = JSON.parse(localStorage.getItem("adsData"));
      setadsData(prevAds);
    }
  };

  useEffect(() => {
    getAdsData();
  }, []);

  useEffect(() => {
    adsData && adsData && adsData.placeName != undefined
      ? setloading(false)
      : setloading(true);
  }, [adsData, adsData]);

  return (
    <>
      {adsData && (
        <div className="px-5 md:px-36">
          <h1 className="mt-4 text-lg md:text-xl font-semibold ">
            {/* Sooty's Hideout ~ Beat the Blues Room */}
            {adsData.placeName.toUpperCase()}
          </h1>
          {/* mobile devices craosal */}
          <AdsDetailCraosal image={adsData.image} />
          {/* medium and large devices image gallery */}
          <div className="hidden md:flex  my-3 justify-center">
            <div className="mr-2">
              <img
                src={adsData.image[0] ? adsData.image[0] : detail5}
                alt=""
                className="w-full md:w-[560px] h-[310px] rounded-l-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1">
              <img
                src={adsData.image[1] ? adsData.image[1] : detail4}
                alt=""
                className="w-[272px] h-[150px]"
              />
              <img
                src={adsData.image[2] ? adsData.image[2] : detail3}
                alt=""
                className="w-[272px] h-[150px] rounded-r-lg"
              />
              <img
                src={adsData.image[3] ? adsData.image[3] : detail1}
                alt=""
                className="w-[272px] h-[150px]"
              />
              <img
                src={adsData.image[4] ? adsData.image[4] : detail5}
                alt=""
                className="w-[272px] h-[150px] rounded-r-lg"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between">
            <div className="md:w-[655px]">
              <h1 className="text-lg font-medium my-1">
                Room in {adsData.location} {adsData.city}, Pakistan
              </h1>
              <div className="text-sm">
                <span>{adsData.bed} bed</span>{" "}
                <span className="text-start">.</span>{" "}
                <span>{adsData.bedroom} Bedroom</span>{" "}
                <span className="text-start">. </span>
                <span>{adsData.bathrom} Bathroom</span>
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
                  <h1 className="font-medium">Hosted by {adsData.host}</h1>
                  <p className="text-sm">2 years hosting</p>
                </div>
              </div>
              <hr className="my-4 " />
              <div>
                <h1 className="text-xl font-medium py-4">About this place</h1>
                <p>{adsData.aboutPlace}</p>
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
