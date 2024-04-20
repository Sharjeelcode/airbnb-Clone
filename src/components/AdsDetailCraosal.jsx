import React from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
function AdsDetailCraosal() {
  return (
    <Carousel
      className="md:hidden rounded-xl w-72 h-30"
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
      {/* {image.map((url) => {
      return (
        <img src={url} className="w-64 h-60" onClick={handleNavigate} />
      );
    })} */}
      <img
        src="https://a0.muscache.com/im/pictures/miso/Hosting-614375154474735110/original/7e7f4c4a-c496-4844-bd02-44e276b41718.jpeg?im_w=960"
        alt=""
        className="w-72 h-30"
      />
    </Carousel>
  );
}

export default AdsDetailCraosal;
