import { Carousel, IconButton } from "@material-tailwind/react";
import { useState } from "react";
import useFireStoreData from "../Hooks/fireStoreData";

function Catagorybar() {
  const { adsCatagroy, handleAdsCatagory } = useFireStoreData();
  return (
    <div className="hidden lg:flex ">
      <Carousel
        className="h-16 "
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="black"
            size="sm"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4 bg-gray-100 rounded-full ml-4"
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
            color="black"
            size="sm"
            onClick={handleNext}
            className="!absolute top-2/4 !right-4 -translate-y-2/4 bg-gray-100 rounded-full ml-4"
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
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
      >
        <div className="flex md:gap-5 xl:gap-16 h-full item-center justify-center">
          <button
            onClick={(e) => handleAdsCatagory(e.target.textContent)}
            className={`flex flex-col items-center justify-center hover:border-b-2 border-black ${
              adsCatagroy === "Islands" ? "border-b-2 border-black" : ""
            }`}
          >
            <img
              src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg"
              alt="image 1"
              className="h-6 w-6 object-cover"
            />
            <span className="text-sm mt-3">Islands</span>
          </button>
          <button
            onClick={(e) => handleAdsCatagory(e.target.textContent)}
            className={`flex flex-col items-center justify-center hover:border-b-2 border-black ${
              adsCatagroy === "Farms" ? "border-b-2 border-black" : ""
            }`}
          >
            <img
              src="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg"
              alt="image 1"
              className="h-6 w-6 object-cover"
            />
            <span className="text-sm mt-3">Farms</span>
          </button>
          <button
            onClick={(e) => handleAdsCatagory(e.target.textContent)}
            className={`flex flex-col items-center justify-center hover:border-b-2 border-black ${
              adsCatagroy === "Amazing pools" ? "border-b-2 border-black" : ""
            }`}
          >
            <img
              src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
              alt="image 1"
              className="h-6 w-6 object-cover"
            />
            <span className="text-sm mt-3">Amazing pools</span>
          </button>
          <button
            onClick={(e) => handleAdsCatagory(e.target.textContent)}
            className={`flex flex-col items-center justify-center hover:border-b-2 border-black ${
              adsCatagroy === "Surfing" ? "border-b-2 border-black" : ""
            }`}
          >
            <img
              src="https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg"
              alt="image 1"
              className="h-6 w-6 object-cover"
            />
            <span className="text-sm mt-3">Surfing</span>
          </button>
          <button
            onClick={(e) => handleAdsCatagory(e.target.textContent)}
            className={`flex flex-col items-center justify-center hover:border-b-2 border-black ${
              adsCatagroy === "Design" ? "border-b-2 border-black" : ""
            }`}
          >
            <img
              src="https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg"
              alt="image 1"
              className="h-6 w-6 object-cover"
            />
            <span className="text-sm mt-3">Design</span>
          </button>
          <button
            onClick={(e) => handleAdsCatagory(e.target.textContent)}
            className={`flex flex-col items-center justify-center hover:border-b-2 border-black ${
              adsCatagroy === "Bed and Breakfasts"
                ? "border-b-2 border-black"
                : ""
            }`}
          >
            <img
              src="https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg"
              alt="image 1"
              className="h-6 w-6 object-cover"
            />
            <span className="text-sm mt-3">Bed and Breakfasts</span>
          </button>

          <button
            onClick={(e) => handleAdsCatagory(e.target.textContent)}
            className={`flex flex-col items-center justify-center hover:border-b-2 border-black ${
              adsCatagroy === "Rooms" ? "border-b-2 border-black" : ""
            }`}
          >
            <img
              src="https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg"
              alt="image 1"
              className="h-6 w-6 object-cover"
            />
            <span className="text-sm mt-3">Rooms</span>
          </button>
          <button
            onClick={(e) => handleAdsCatagory(e.target.textContent)}
            className={`flex flex-col items-center justify-center hover:border-b-2 border-black ${
              adsCatagroy === "Canvas" ? "border-b-2 border-black" : ""
            }`}
          >
            <img
              src="https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg"
              alt="image 1"
              className="h-6 w-6 object-cover"
            />
            <span className="text-sm mt-3">Canvas</span>
          </button>
        </div>
        <div className="flex md:gap-5 xl:gap-16  item-center justify-center">
          <button
            onClick={(e) => handleAdsCatagory(e.target.textContent)}
            className={`flex flex-col items-center justify-center hover:border-b-2 border-black ${
              adsCatagroy === "OMG!" ? "border-b-2 border-black" : ""
            }`}
          >
            <img
              src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
              alt="image 1"
              className="h-6 w-6 object-cover"
            />
            <span className="text-sm mt-3">OMG!</span>
          </button>
          <button
            onClick={(e) => handleAdsCatagory(e.target.textContent)}
            className={`flex flex-col items-center justify-center hover:border-b-2 border-black ${
              adsCatagroy === "New" ? "border-b-2 border-black" : ""
            }`}
          >
            <img
              src="https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg"
              alt="image 1"
              className="h-6 w-6 object-cover"
            />
            <span className="text-sm mt-3">New</span>
          </button>
          <button
            onClick={(e) => handleAdsCatagory(e.target.textContent)}
            className={`flex flex-col items-center justify-center hover:border-b-2 border-black ${
              adsCatagroy === "Arctic" ? "border-b-2 border-black" : ""
            }`}
          >
            <img
              src="https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg"
              alt="image 1"
              className="h-6 w-6 object-cover"
            />
            <span className="text-sm mt-3">Arctic</span>
          </button>
          <button
            onClick={(e) => handleAdsCatagory(e.target.textContent)}
            className={`flex flex-col items-center justify-center hover:border-b-2 border-black ${
              adsCatagroy === "Top of the world"
                ? "border-b-2 border-black"
                : ""
            }`}
          >
            <img
              src="https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg"
              alt="image 1"
              className="h-6 w-6 object-cover"
            />
            <span className="text-sm mt-3">Top of the world</span>
          </button>
          <button
            onClick={(e) => handleAdsCatagory(e.target.textContent)}
            className={`flex flex-col items-center justify-center hover:border-b-2 border-black ${
              adsCatagroy === "Tropical" ? "border-b-2 border-black" : ""
            }`}
          >
            <img
              src="https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg"
              alt="image 1"
              className="h-6 w-6 object-cover"
            />
            <span className="text-sm mt-3">Tropical</span>
          </button>
          <button
            onClick={(e) => handleAdsCatagory(e.target.textContent)}
            className={`flex flex-col items-center justify-center hover:border-b-2 border-black ${
              adsCatagroy === "Tower" ? "border-b-2 border-black" : ""
            }`}
          >
            <img
              src="https://a0.muscache.com/pictures/d721318f-4752-417d-b4fa-77da3cbc3269.jpg"
              alt="image 1"
              className="h-6 w-6 object-cover"
            />
            <span className="text-sm mt-3">Tower</span>
          </button>
          <button
            onClick={(e) => handleAdsCatagory(e.target.textContent)}
            className={`flex flex-col items-center justify-center hover:border-b-2 border-black ${
              adsCatagroy === "Dammusi" ? "border-b-2 border-black" : ""
            }`}
          >
            <img
              src="https://a0.muscache.com/pictures/c9157d0a-98fe-4516-af81-44022118fbc7.jpg"
              alt="image 1"
              className="h-6 w-6 object-cover"
            />
            <span className="text-sm mt-3">Dammusi</span>
          </button>
          <button
            onClick={(e) => handleAdsCatagory(e.target.textContent)}
            className={`flex flex-col items-center justify-center hover:border-b-2 border-black ${
              adsCatagroy === "Campers" ? "border-b-2 border-black" : ""
            }`}
          >
            <img
              src="https://a0.muscache.com/pictures/31c1d523-cc46-45b3-957a-da76c30c85f9.jpg"
              alt="image 1"
              className="h-6 w-6 object-cover"
            />
            <span className="text-sm mt-3">Campers</span>
          </button>
        </div>
        <div className="flex md:gap-5 xl:gap-16 h-full item-center justify-center">
          <button
            onClick={(e) => handleAdsCatagory(e.target.textContent)}
            className={`flex flex-col items-center justify-center hover:border-b-2 border-black ${
              adsCatagroy === "Beach" ? "border-b-2 border-black" : ""
            }`}
          >
            <img
              src="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg"
              alt="image 1"
              className="h-6 w-6 object-cover"
            />
            <span className="text-sm mt-3">Beach</span>
          </button>

          <button
            onClick={(e) => handleAdsCatagory(e.target.textContent)}
            className={`flex flex-col items-center justify-center hover:border-b-2 border-black ${
              adsCatagroy === "Trending" ? "border-b-2 border-black" : ""
            }`}
          >
            <img
              src="https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg"
              alt="image 1"
              className="h-6 w-6 object-cover"
            />
            <span className="text-sm mt-3">Trending</span>
          </button>
          <button
            onClick={(e) => handleAdsCatagory(e.target.textContent)}
            className={`flex flex-col items-center justify-center hover:border-b-2 border-black ${
              adsCatagroy === "National parks" ? "border-b-2 border-black" : ""
            }`}
          >
            <img
              src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg"
              alt="image 1"
              className="h-6 w-6 object-cover"
            />
            <span className="text-sm mt-3">National parks</span>
          </button>
          <button
            onClick={(e) => handleAdsCatagory(e.target.textContent)}
            className={`flex flex-col items-center justify-center hover:border-b-2 border-black ${
              adsCatagroy === "Countryside" ? "border-b-2 border-black" : ""
            }`}
          >
            <img
              src="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg"
              alt="image 1"
              className="h-6 w-6 object-cover"
            />
            <span className="text-sm mt-3">Countryside</span>
          </button>
          <button
            onClick={(e) => handleAdsCatagory(e.target.textContent)}
            className={`flex flex-col items-center justify-center hover:border-b-2 border-black ${
              adsCatagroy === "Lake" ? "border-b-2 border-black" : ""
            }`}
          >
            <img
              src="https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg"
              alt="image 1"
              className="h-6 w-6 object-cover"
            />
            <span className="text-sm mt-3">Lake</span>
          </button>
          <button
            onClick={(e) => handleAdsCatagory(e.target.textContent)}
            className={`flex flex-col items-center justify-center hover:border-b-2 border-black ${
              adsCatagroy === "Tiny homes" ? "border-b-2 border-black" : ""
            }`}
          >
            <img
              src="https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg"
              alt="image 1"
              className="h-6 w-6 object-cover"
            />
            <span className="text-sm mt-3">Tiny homes</span>
          </button>
          <button
            onClick={(e) => handleAdsCatagory(e.target.textContent)}
            className={`flex flex-col items-center justify-center hover:border-b-2 border-black ${
              adsCatagroy === "Mensions" ? "border-b-2 border-black" : ""
            }`}
          >
            <img
              src="https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg"
              alt="image 1"
              className="h-6 w-6 object-cover"
            />
            <span className="text-sm mt-3">Mensions</span>
          </button>
          <button
            onClick={(e) => handleAdsCatagory(e.target.textContent)}
            className={`flex flex-col items-center justify-center hover:border-b-2 border-black ${
              adsCatagroy === "Historical homes"
                ? "border-b-2 border-black"
                : ""
            }`}
          >
            <img
              src="https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg"
              alt="image 1"
              className="h-6 w-6 object-cover"
            />
            <span className="text-sm mt-3">Historical homes</span>
          </button>
        </div>
      </Carousel>
      <div className="flex items-center">
        <button
          onClick={() => handleAdsCatagory("")}
          className="w-36  rounded-full bg-gray-200 mx-2 px-2 py-2"
        >
          Show all Stays{" "}
        </button>
      </div>
    </div>
  );
}

export default Catagorybar;
