import { useState } from "react";
import home1 from "../assets/home1.webp";
import home2 from "../assets/home2.webp";
import home3 from "../assets/home3.webp";
import homevideo from "../assets/homevideo.mp4";
import { Input, Textarea, Button } from "@material-tailwind/react";
import UploadImages from "../components/UploadImages";
function YourHome() {
  const [currentStep, setCurrentStep] = useState(1);
  const [Place, setPlace] = useState("");
  const [Guest, setGuest] = useState(0);
  const [Bedroom, setBedroom] = useState(0);
  const [Bed, setBed] = useState(0);
  const [privateBathroom, setprivateBathroom] = useState(0);

  const handleNextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };
  console.log(Place);
  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  return (
    <>
      {currentStep === 1 && (
        <div className="flex justify-around my-5 px-5">
          <div className="flex items-center">
            <h1 className="text-6xl font-medium text-gray-900 ">
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
                  Add 5 or more photos plus a title and description – <br />{" "}
                  we’ll help you out.
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
        <div className="flex justify-around my-5 px-5">
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

      {currentStep === 3 && (
        <div>
          <h1 className="text-center mt-2 font-medium text-3xl">
            Which of these best describes your place?
          </h1>
          <div className="flex justify-center m-5">
            <div className="grid gap-3 grid-cols-4">
              <button
                onClick={(e) => setPlace(e.target.textContent)}
                className={`flex flex-col border-2 rounded items-center justify-center p-3 ${
                  Place === "OMG!" ? "border-black" : "hover:border-black"
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
                className={`flex flex-col border-2 rounded items-center justify-center p-3 ${
                  Place === "New" ? "border-black" : "hover:border-black"
                }`}
                onClick={(e) => setPlace(e.target.textContent)}
              >
                <img
                  src="https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg"
                  alt="image 1"
                  className="h-6 w-6 object-cover"
                />
                <span className="text-sm mt-3">New</span>
              </button>
              <button
                onClick={(e) => setPlace(e.target.textContent)}
                className={`flex flex-col border-2 rounded items-center justify-center p-3 ${
                  Place === "Arctic" ? "border-black" : "hover:border-black"
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
                onClick={(e) => setPlace(e.target.textContent)}
                className={`flex flex-col border-2 rounded items-center justify-center p-3 ${
                  Place === "Top of the world"
                    ? "border-black"
                    : "hover:border-black"
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
                onClick={(e) => setPlace(e.target.textContent)}
                className={`flex flex-col border-2 rounded items-center justify-center p-3 ${
                  Place === "Tropical" ? "border-black" : "hover:border-black"
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
                onClick={(e) => setPlace(e.target.textContent)}
                className={`flex flex-col border-2 rounded items-center justify-center p-3 ${
                  Place === "Tower" ? "border-black" : "hover:border-black"
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
                onClick={(e) => setPlace(e.target.textContent)}
                className={`flex flex-col border-2 rounded items-center justify-center p-3 ${
                  Place === "Dammusi" ? "border-black" : "hover:border-black"
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
                onClick={(e) => setPlace(e.target.textContent)}
                className={`flex flex-col border-2 rounded items-center justify-center p-3 ${
                  Place === "Historical homes"
                    ? "border-black"
                    : "hover:border-black"
                }`}
              >
                <img
                  src="https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg"
                  alt="image 1"
                  className="h-6 w-6 object-cover"
                />
                <span className="text-sm mt-3">Historical homes</span>
              </button>

              <button
                onClick={(e) => setPlace(e.target.textContent)}
                className={`flex flex-col border-2 rounded items-center justify-center p-3 ${
                  Place === "Campers" ? "border-black" : "hover:border-black"
                }`}
              >
                <img
                  src="https://a0.muscache.com/pictures/31c1d523-cc46-45b3-957a-da76c30c85f9.jpg"
                  alt="image 1"
                  className="h-6 w-6 object-cover"
                />
                <span className="text-sm mt-3">Campers</span>
              </button>
              <button
                onClick={(e) => setPlace(e.target.textContent)}
                className={`flex flex-col border-2 rounded items-center justify-center p-3 ${
                  Place === "Islands" ? "border-black" : "hover:border-black"
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
                onClick={(e) => setPlace(e.target.textContent)}
                className={`flex flex-col border-2 rounded items-center justify-center p-3 ${
                  Place === "Amazing pools"
                    ? "border-black"
                    : "hover:border-black"
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
                onClick={(e) => setPlace(e.target.textContent)}
                className={`flex flex-col border-2 rounded items-center justify-center p-3 ${
                  Place === "Surfing" ? "border-black" : "hover:border-black"
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
                onClick={(e) => setPlace(e.target.textContent)}
                className={`flex flex-col border-2 rounded items-center justify-center p-3 ${
                  Place === "Design" ? "border-black" : "hover:border-black"
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
                onClick={(e) => setPlace(e.target.textContent)}
                className={`flex flex-col border-2 rounded items-center justify-center p-3 ${
                  Place === "National parks"
                    ? "border-black"
                    : "hover:border-black"
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
                onClick={(e) => setPlace(e.target.textContent)}
                className={`flex flex-col border-2 rounded items-center justify-center p-3 ${
                  Place === "Rooms" ? "border-black" : "hover:border-black"
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
                onClick={(e) => setPlace(e.target.textContent)}
                className={`flex flex-col border-2 rounded items-center justify-center p-3 ${
                  Place === "Canvas" ? "border-black" : "hover:border-black"
                }`}
              >
                <img
                  src="https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg"
                  alt="image 1"
                  className="h-6 w-6 object-cover"
                />
                <span className="text-sm mt-3">Canvas</span>
              </button>

              <button
                onClick={(e) => setPlace(e.target.textContent)}
                className={`flex flex-col border-2 rounded items-center justify-center p-3 ${
                  Place === "Beach" ? "border-black" : "hover:border-black"
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
                onClick={(e) => setPlace(e.target.textContent)}
                className={`flex flex-col border-2 rounded items-center justify-center p-3 ${
                  Place === "Bed and Breakfasts"
                    ? "border-black"
                    : "hover:border-black"
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
                onClick={(e) => setPlace(e.target.textContent)}
                className={`flex flex-col border-2 rounded items-center justify-center p-3 ${
                  Place === "Trending" ? "border-black" : "hover:border-black"
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
                onClick={(e) => setPlace(e.target.textContent)}
                className={`flex flex-col border-2 rounded items-center justify-center p-3 ${
                  Place === "Countryside"
                    ? "border-black"
                    : "hover:border-black"
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
                onClick={(e) => setPlace(e.target.textContent)}
                className={`flex flex-col border-2 rounded items-center justify-center p-3 ${
                  Place === "Lake" ? "border-black" : "hover:border-black"
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
                onClick={(e) => setPlace(e.target.textContent)}
                className={`flex flex-col border-2 rounded items-center justify-center p-3 ${
                  Place === "Tiny homes" ? "border-black" : "hover:border-black"
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
                onClick={(e) => setPlace(e.target.textContent)}
                className={`flex flex-col border-2 rounded items-center justify-center p-3 ${
                  Place === "Mensions" ? "border-black" : "hover:border-black"
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
                onClick={(e) => setPlace(e.target.textContent)}
                className={`flex flex-col border-2 rounded items-center justify-center p-3 ${
                  Place === "Farms" ? "border-black" : "hover:border-black"
                }`}
              >
                <img
                  src="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg"
                  alt="image 1"
                  className="h-6 w-6 object-cover"
                />
                <span className="text-sm mt-3">Farms</span>
              </button>
            </div>
          </div>
        </div>
      )}
      {currentStep === 4 && (
        <div>
          <h1 className="text-center mt-2 font-medium text-3xl">
            Which of these best describes your place?
          </h1>
          <div className="flex justify-center  ">
            <form action="" className=" w-72 md:w-auto border-2 flex flex-col">
              <div className="flex flex-col gap-3 p-3">
                <Input type="email" color="black" label="Hosted by" />
                <Input type="email" color="black" label="Location" />
                <Input type="email" color="black" label="Place Name" />
                <Textarea size="lg" label="About this space " className="" />
              </div>
              <div>
                <div className="flex items-center justify-between gap-4 p-2">
                  <label
                    for="bedrooms-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Guests
                  </label>
                  <div class="relative flex items-center max-w-[11rem]">
                    <button
                      onClick={() => (Guest > 0 ? setGuest(Guest - 1) : "")}
                      type="button"
                      id="decrement-button"
                      data-input-counter-decrement="bedrooms-input"
                      class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                    >
                      <svg
                        class="w-3 h-3 text-gray-900 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 2"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 1h16"
                        />
                      </svg>
                    </button>
                    <input
                      type="text"
                      id="bedrooms-input"
                      data-input-counter
                      data-input-counter-min="1"
                      data-input-counter-max="5"
                      aria-describedby="helper-text-explanation"
                      class="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      value={Guest}
                      required
                    />
                    <div class="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse">
                      <span>Guests</span>
                    </div>
                    <button
                      onClick={() => setGuest(Guest + 1)}
                      type="button"
                      id="increment-button"
                      data-input-counter-increment="bedrooms-input"
                      class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                    >
                      <svg
                        class="w-3 h-3 text-gray-900 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 1v16M1 9h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 p-2">
                  <label
                    for="bedrooms-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Bedrooms
                  </label>
                  <div class="relative flex items-center max-w-[11rem]">
                    <button
                      onClick={() =>
                        Bedroom > 0 ? setBedroom(Bedroom - 1) : ""
                      }
                      type="button"
                      id="decrement-button"
                      data-input-counter-decrement="bedrooms-input"
                      class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                    >
                      <svg
                        class="w-3 h-3 text-gray-900 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 2"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 1h16"
                        />
                      </svg>
                    </button>
                    <input
                      type="text"
                      id="bedrooms-input"
                      data-input-counter
                      data-input-counter-min="1"
                      data-input-counter-max="5"
                      aria-describedby="helper-text-explanation"
                      class="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      value={Bedroom}
                      required
                    />
                    <div class="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse">
                      <span>Beds</span>
                    </div>
                    <button
                      onClick={() => setBedroom(Bedroom + 1)}
                      type="button"
                      id="increment-button"
                      data-input-counter-increment="bedrooms-input"
                      class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                    >
                      <svg
                        class="w-3 h-3 text-gray-900 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 1v16M1 9h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 p-2">
                  <label
                    for="bedrooms-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Beds
                  </label>
                  <div class="relative flex items-center max-w-[11rem]">
                    <button
                      onClick={() => (Bed > 0 ? setBed(Bed - 1) : "")}
                      type="button"
                      id="decrement-button"
                      data-input-counter-decrement="bedrooms-input"
                      class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                    >
                      <svg
                        class="w-3 h-3 text-gray-900 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 2"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 1h16"
                        />
                      </svg>
                    </button>
                    <input
                      type="text"
                      id="bedrooms-input"
                      data-input-counter
                      data-input-counter-min="1"
                      data-input-counter-max="5"
                      aria-describedby="helper-text-explanation"
                      class="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      value={Bed}
                      required
                    />
                    <div class="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse">
                      <span>Beds</span>
                    </div>
                    <button
                      onClick={() => setBed(Bed + 1)}
                      type="button"
                      id="increment-button"
                      data-input-counter-increment="bedrooms-input"
                      class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                    >
                      <svg
                        class="w-3 h-3 text-gray-900 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 1v16M1 9h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 p-2">
                  <label
                    for="bedrooms-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Private Bathrooms
                  </label>
                  <div class="relative flex items-center max-w-[11rem]">
                    <button
                      onClick={() =>
                        privateBathroom > 0
                          ? setprivateBathroom(privateBathroom - 1)
                          : ""
                      }
                      type="button"
                      id="decrement-button"
                      data-input-counter-decrement="bedrooms-input"
                      class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                    >
                      <svg
                        class="w-3 h-3 text-gray-900 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 2"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 1h16"
                        />
                      </svg>
                    </button>
                    <input
                      type="text"
                      id="bedrooms-input"
                      data-input-counter
                      data-input-counter-min="1"
                      data-input-counter-max="5"
                      aria-describedby="helper-text-explanation"
                      class="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      value={privateBathroom}
                      required
                    />
                    <div class="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse">
                      <span>Bathrooms</span>
                    </div>
                    <button
                      onClick={() => setprivateBathroom(privateBathroom + 1)}
                      type="button"
                      id="increment-button"
                      data-input-counter-increment="bedrooms-input"
                      class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                    >
                      <svg
                        class="w-3 h-3 text-gray-900 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 1v16M1 9h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <UploadImages />
              <div className="flex  justify-center rounded py-2"></div>
              <input
                type="submit"
                className="bg-black text-white p-3 rounded  "
              />
            </form>
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
        <div className="w-full  border-t-2 py-4 bg-white flex  justify-between px-6 sticky bottom-0">
          <button onClick={handlePrevStep} className="underline">
            back
          </button>
          {currentStep < 4 && (
            <button
              onClick={handleNextStep}
              className="px-4 py-2  rounded-lg text-white bg-gray-900"
            >
              Next
            </button>
          )}
        </div>
      )}
    </>
  );
}

export default YourHome;
