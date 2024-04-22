import { Carousel, IconButton } from "@material-tailwind/react";
import useFireStoreData from "../Hooks/fireStoreData";

function AdsDetailCraosal() {
  const { adsData, adsDetail } = useFireStoreData();

  return (
    <Carousel
      className="md:hidden rounded-xl w-full h-40"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="sm"
          onClick={handlePrev}
          className="!absolute top-20 left-1  backdrop-blur-sm -translate-y-2/4 rounded-full hover:bg-gray-500"
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
          className="!absolute top-20 !right-1 backdrop-blur-sm  -translate-y-2/4 rounded-full hover:bg-gray-500"
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
      {adsData[adsDetail].image.map((url) => {
        return <img src={url} className="w-full h-40" />;
      })}
    </Carousel>
  );
}

export default AdsDetailCraosal;
