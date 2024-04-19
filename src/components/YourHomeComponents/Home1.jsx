import React from "react";
import home1 from "../../assets/home1.webp";
import home2 from "../../assets/home2.webp";
import home3 from "../../assets/home3.webp";
import useCheckAuth from "../../Hooks/checkAuth";
function Home1() {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-around my-5 px-5">
      <div className="flex items-center">
        <h1 className="text-2xl md:text-6xl font-medium text-gray-900 mb-4 md:mb-0">
          It's easy to get <br />
          started on Airbnb
        </h1>
      </div>
      <div>
        <div className="flex pb-4">
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
        <div className="flex pt-4 pb-4">
          <h1 className="font-medium pb-1 px-2 text-xl">2</h1>
          <div className="">
            <h1 className="font-medium pb-1 text-xl">Make it stand out</h1>
            <p className="text-gray-500">
              Add 5 or more photos plus a title and description – <br /> we’ll
              help you out.
            </p>
          </div>
          <div>
            <img src={home2} alt="" className="w-28 h-28 " />
          </div>
        </div>
        <hr />
        <div className="flex pt-4 pb-2">
          <h1 className="font-medium pb-1 px-2 text-xl">2</h1>
          <div className="">
            <h1 className="font-medium pb-1 text-xl">Finish up and publish</h1>
            <p className="text-gray-500">
              Choose if you'd like to start with an experienced <br /> guest,
              set a starting price and publish your listing.
            </p>
          </div>
          <div>
            <img src={home3} alt="" className="w-28 h-28 " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home1;
