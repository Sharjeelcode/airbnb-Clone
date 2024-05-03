import React, { useEffect, useState } from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import useFireStoreData from "../Hooks/fireStoreData";
function ImageGallery(prop) {
  const { gallery, handleGallery } = useFireStoreData();
  const { images } = prop;

  return (
    <>
      {gallery === true ? (
        <div>
          <div>
            <div
              className={`flex backdrop-blur-sm overflow-x-hidden   overflow-y-auto fixed  h-full left-0 right-0 inset-0 z-50 justify-center items-center`}
            >
              <div className="relative w-[80vw] md:h-auto">
                <div className="backdrop-blur-sm  rounded-lg shadow relative dark:bg-gray-700">
                  <div className="w-full ">
                    <div className="flex w-full justify-end">
                      <button
                        onClick={handleGallery}
                        className="relative text-white  top-10 right-2 z-50  text-xl px-2 bg-gray-500 rounded-full"
                      >
                        x
                      </button>
                    </div>
                    <Carousel
                      className=" rounded-xl w-full h-full"
                      prevArrow={({ handlePrev }) => (
                        <IconButton
                          variant="text"
                          color="white"
                          size="md"
                          onClick={handlePrev}
                          className="!absolute top-[50%] left-3 bg-gray-500  -translate-y-2/4 rounded-full hover:bg-gray-500"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-12 w-12 px-2"
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
                          size="md"
                          onClick={handleNext}
                          className="!absolute top-[50%]  !right-3 bg-gray-500  -translate-y-2/4 rounded-full hover:bg-gray-500"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-12 w-12 px-2"
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
                      {images.map((url, id) => {
                        return (
                          <img src={url} className="w-full h-[80vh]" key={id} />
                        );
                      })}
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default ImageGallery;
