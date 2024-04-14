import { Carousel, IconButton } from "@material-tailwind/react";
function YourHome() {
  return (
    <>
      <div>
        <Carousel
          className="h-96 "
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="black"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4 bg-white rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
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
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 !right-4 -translate-y-2/4 "
            >
              <h1 className="bg-pink-700 rounded p-2">Next</h1>
            </IconButton>
          )}
        >
          <div className="flex justify-center items-center h-full">
            <h1>hkfj</h1>
          </div>
          <div className="flex justify-center items-center">
            <h1>hfdggfdgdgdffdkh</h1>
          </div>
          <div className="flex justify-center items-center">
            <h1>dgdffdkh</h1>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default YourHome;
