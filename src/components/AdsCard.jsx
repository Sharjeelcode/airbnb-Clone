import { Carousel, IconButton } from "@material-tailwind/react";

import { useNavigate } from "react-router-dom";
import useFireStoreData from "../Hooks/fireStoreData";
function AdsCard(prop) {
  const { price, location, placeview, image, host, id } = prop;
  // console.log(id);
  const review = Math.round(Math.random() * 100 + 1);
  const navigate = useNavigate();

  const { pushadsDetail } = useFireStoreData();

  const handleNavigate = () => {
    pushadsDetail(id);
    navigate("/adsdetail");
  };
  return (
    <div className="w-64 h-96 cursor-pointer">
      <Carousel
        className="rounded-xl w-64 h-60"
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="sm"
            onClick={handlePrev}
            className="!absolute top-32 left-1  backdrop-blur-sm -translate-y-2/4 rounded-full hover:bg-gray-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="sm"
            onClick={handleNext}
            className="!absolute top-32 !right-1 backdrop-blur-sm  -translate-y-2/4 rounded-full hover:bg-gray-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
      >
        {/* <Carousel className="rounded-xl w-64 h-64"> */}
        {image.map((url) => {
          return (
            <img src={url} className="w-64 h-60" onClick={handleNavigate} />
          );
        })}
      </Carousel>
      <div className="py-2 px-1 " onClick={handleNavigate}>
        <div className="flex justify-between">
          <h1 className="font-semibold text-[14px] truncate w-32">
            {location}
          </h1>
          <h1 className="w-16">★ 4.{review}</h1>
        </div>
        <h2 className="text-gray-600 text-[14px] truncate ">{placeview}</h2>
        <h2 className="text-gray-600 text-[14px]">
          <span className="">Hosted by-</span>
          {host}
        </h2>
        <h1 className=" text-[14px]">
          <span className="font-semibold">Pkr-{price}</span> night
        </h1>
      </div>
    </div>
  );
}

export default AdsCard;
