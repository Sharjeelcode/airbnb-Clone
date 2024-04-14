import { Carousel, IconButton } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

function Catagorybar() {
  return (
    <Carousel
      className="h-20 "
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
          color="black"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4 bg-white rounded-full"
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
      <div className="flex gap-12 h-full item-center justify-center">
        <NavLink
          to={"/google"}
          className="flex flex-col items-center justify-center hover:border-b-2 border-black "
        >
          <img
            src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
            alt="image 1"
            className="h-6 w-6 object-cover"
          />
          <span className="text-sm mt-3">OMG!</span>
        </NavLink>
        <NavLink
          to={"/google"}
          className="flex flex-col items-center justify-center hover:border-b-2 border-black "
        >
          <img
            src="https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg"
            alt="image 1"
            className="h-6 w-6 object-cover"
          />
          <span className="text-sm mt-3">New</span>
        </NavLink>
        <NavLink
          to={"/google"}
          className="flex flex-col items-center justify-center hover:border-b-2 border-black "
        >
          <img
            src="https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg"
            alt="image 1"
            className="h-6 w-6 object-cover"
          />
          <span className="text-sm mt-3">Arctic</span>
        </NavLink>
        <NavLink
          to={"/google"}
          className="flex flex-col items-center justify-center hover:border-b-2 border-black "
        >
          <img
            src="https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg"
            alt="image 1"
            className="h-6 w-6 object-cover"
          />
          <span className="text-sm mt-3">Top of the world</span>
        </NavLink>
        <NavLink
          to={"/google"}
          className="flex flex-col items-center justify-center hover:border-b-2 border-black "
        >
          <img
            src="https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg"
            alt="image 1"
            className="h-6 w-6 object-cover"
          />
          <span className="text-sm mt-3">Tropical</span>
        </NavLink>
        <NavLink
          to={"/google"}
          className="flex flex-col items-center justify-center hover:border-b-2 border-black "
        >
          <img
            src="https://a0.muscache.com/pictures/d721318f-4752-417d-b4fa-77da3cbc3269.jpg"
            alt="image 1"
            className="h-6 w-6 object-cover"
          />
          <span className="text-sm mt-3">Tower</span>
        </NavLink>
        <NavLink
          to={"/google"}
          className="flex flex-col items-center justify-center hover:border-b-2 border-black "
        >
          <img
            src="https://a0.muscache.com/pictures/c9157d0a-98fe-4516-af81-44022118fbc7.jpg"
            alt="image 1"
            className="h-6 w-6 object-cover"
          />
          <span className="text-sm mt-3">Dammusi</span>
        </NavLink>
        <NavLink
          to={"/google"}
          className="flex flex-col items-center justify-center hover:border-b-2 border-black "
        >
          <img
            src="https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg"
            alt="image 1"
            className="h-6 w-6 object-cover"
          />
          <span className="text-sm mt-3">Historical homes</span>
        </NavLink>
      </div>
      <div className="flex gap-12 h-full item-center justify-center">
        <NavLink
          to={"/google"}
          className="flex flex-col items-center justify-center hover:border-b-2 border-black "
        >
          <img
            src="https://a0.muscache.com/pictures/31c1d523-cc46-45b3-957a-da76c30c85f9.jpg"
            alt="image 1"
            className="h-6 w-6 object-cover"
          />
          <span className="text-sm mt-3">Campers</span>
        </NavLink>
        <NavLink
          to={"/google"}
          className="flex flex-col items-center justify-center hover:border-b-2 border-black "
        >
          <img
            src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg"
            alt="image 1"
            className="h-6 w-6 object-cover"
          />
          <span className="text-sm mt-3">Islands</span>
        </NavLink>
        <NavLink
          to={"/google"}
          className="flex flex-col items-center justify-center hover:border-b-2 border-black "
        >
          <img
            src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
            alt="image 1"
            className="h-6 w-6 object-cover"
          />
          <span className="text-sm mt-3">Amazing pools</span>
        </NavLink>
        <NavLink
          to={"/google"}
          className="flex flex-col items-center justify-center hover:border-b-2 border-black "
        >
          <img
            src="https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg"
            alt="image 1"
            className="h-6 w-6 object-cover"
          />
          <span className="text-sm mt-3">Surfing</span>
        </NavLink>
        <NavLink
          to={"/google"}
          className="flex flex-col items-center justify-center hover:border-b-2 border-black "
        >
          <img
            src="https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg"
            alt="image 1"
            className="h-6 w-6 object-cover"
          />
          <span className="text-sm mt-3">Design</span>
        </NavLink>
        <NavLink
          to={"/google"}
          className="flex flex-col items-center justify-center hover:border-b-2 border-black "
        >
          <img
            src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg"
            alt="image 1"
            className="h-6 w-6 object-cover"
          />
          <span className="text-sm mt-3">National parks</span>
        </NavLink>
        <NavLink
          to={"/google"}
          className="flex flex-col items-center justify-center hover:border-b-2 border-black "
        >
          <img
            src="https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg"
            alt="image 1"
            className="h-6 w-6 object-cover"
          />
          <span className="text-sm mt-3">Rooms</span>
        </NavLink>
        <NavLink
          to={"/google"}
          className="flex flex-col items-center justify-center hover:border-b-2 border-black "
        >
          <img
            src="https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg"
            alt="image 1"
            className="h-6 w-6 object-cover"
          />
          <span className="text-sm mt-3">Canvas</span>
        </NavLink>
      </div>
      <div className="flex gap-12 h-full item-center justify-center">
        <NavLink
          to={"/google"}
          className="flex flex-col items-center justify-center hover:border-b-2 border-black "
        >
          <img
            src="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg"
            alt="image 1"
            className="h-6 w-6 object-cover"
          />
          <span className="text-sm mt-3">Beach</span>
        </NavLink>
        <NavLink
          to={"/google"}
          className="flex flex-col items-center justify-center hover:border-b-2 border-black "
        >
          <img
            src="https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg"
            alt="image 1"
            className="h-6 w-6 object-cover"
          />
          <span className="text-sm mt-3">Bed and Breakfasts</span>
        </NavLink>
        <NavLink
          to={"/google"}
          className="flex flex-col items-center justify-center hover:border-b-2 border-black "
        >
          <img
            src="https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg"
            alt="image 1"
            className="h-6 w-6 object-cover"
          />
          <span className="text-sm mt-3">Trending</span>
        </NavLink>
        <NavLink
          to={"/google"}
          className="flex flex-col items-center justify-center hover:border-b-2 border-black "
        >
          <img
            src="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg"
            alt="image 1"
            className="h-6 w-6 object-cover"
          />
          <span className="text-sm mt-3">Countryside</span>
        </NavLink>
        <NavLink
          to={"/google"}
          className="flex flex-col items-center justify-center hover:border-b-2 border-black "
        >
          <img
            src="https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg"
            alt="image 1"
            className="h-6 w-6 object-cover"
          />
          <span className="text-sm mt-3">Lake</span>
        </NavLink>
        <NavLink
          to={"/google"}
          className="flex flex-col items-center justify-center hover:border-b-2 border-black "
        >
          <img
            src="https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg"
            alt="image 1"
            className="h-6 w-6 object-cover"
          />
          <span className="text-sm mt-3">Tiny homes</span>
        </NavLink>
        <NavLink
          to={"/google"}
          className="flex flex-col items-center justify-center hover:border-b-2 border-black "
        >
          <img
            src="https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg"
            alt="image 1"
            className="h-6 w-6 object-cover"
          />
          <span className="text-sm mt-3">Mensions</span>
        </NavLink>
        <NavLink
          to={"/google"}
          className="flex flex-col items-center justify-center hover:border-b-2 border-black "
        >
          <img
            src="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg"
            alt="image 1"
            className="h-6 w-6 object-cover"
          />
          <span className="text-sm mt-3">Farms</span>
        </NavLink>
      </div>
    </Carousel>
  );
}

export default Catagorybar;
