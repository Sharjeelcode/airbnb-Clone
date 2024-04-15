import { useState } from "react";
import home1 from "../assets/home1.webp";
import home2 from "../assets/home2.webp";
import home3 from "../assets/home3.webp";
import homevideo from "../assets/homevideo.mp4";
function YourHome() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  return (
    <>
      {currentStep === 1 && (
        <div className="flex justify-around my-5 ">
          <div className="flex items-center">
            <h1 className="text-6xl font-medium text-gray-900">
              It's easy to get <br />
              started on Airbnb
            </h1>
          </div>
          <div>
            <div className="flex pb-8">
              <h1 className="font-medium pb-1 px-2 text-xl">1</h1>
              <div className="">
                <h1 className="font-medium pb-1 text-xl">
                  Tell us about your place
                </h1>
                <p className="text-gray-500">
                  Share some basic info, such as where it is and how <br /> many
                  guests can stay.
                </p>
              </div>
              <div>
                <img src={home1} alt="" className="w-28 h-28 " />
              </div>
            </div>
            <hr />
            <div className="flex pt-4 pb-8">
              <h1 className="font-medium pb-1 px-2 text-xl">2</h1>
              <div className="">
                <h1 className="font-medium pb-1 text-xl">Make it stand out</h1>
                <p className="text-gray-500">
                  Add 5 or more photos plus a title and description – <br />{" "}
                  we’ll help you out.
                </p>
              </div>
              <div>
                <img src={home2} alt="" className="w-28 h-28 " />
              </div>
            </div>
            <hr />
            <div className="flex pt-4 pb-8">
              <h1 className="font-medium pb-1 px-2 text-xl">2</h1>
              <div className="">
                <h1 className="font-medium pb-1 text-xl">
                  Finish up and publish
                </h1>
                <p className="text-gray-500">
                  Choose if you'd like to start with an experienced <br />{" "}
                  guest, set a starting price and publish your listing.
                </p>
              </div>
              <div>
                <img src={home3} alt="" className="w-28 h-28 " />
              </div>
            </div>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="flex justify-around my-5 ">
          <div className="flex flex-col  justify-center">
            <h1 className="text-lg">Step 1</h1>
            <h1 className="text-4xl font-semibold py-3 text-gray-900">
              Tell us about your place
            </h1>
            <p className="text-lg">
              In this step, we'll ask you which type of property you have and if{" "}
              <br />
              guests will book the entire place or just a room. Then let us know
              the <br /> location and how many guests can stay.
            </p>
          </div>
          <div>
            <video src={homevideo} autoPlay className="h-96 w-96"></video>
          </div>
        </div>
      )}

      {/* buttons for change state of components */}
      {currentStep === 1 && (
        <div className="flex justify-end sticky right-0 ">
          <button
            onClick={handleNextStep}
            className="mr-8 p-3  rounded-lg text-white bg-[#FE375C]"
          >
            Get started
          </button>
        </div>
      )}
      {currentStep !== 1 && (
        <div className="w-full border-t-2 py-4 flex  justify-between px-6 fixed bottom-0">
          <button onClick={handlePrevStep} className="underline">
            back
          </button>
          <button className="px-4 py-2  rounded-lg text-white bg-gray-900">
            Next
          </button>
        </div>
      )}
    </>
  );
}

export default YourHome;
