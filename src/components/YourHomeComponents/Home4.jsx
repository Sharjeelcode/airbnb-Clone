import React, { useEffect, useState } from "react";
import { Input, Textarea, Button } from "@material-tailwind/react";
import UploadImages from "../UploadImages";
import useCheckAuth from "../../Hooks/checkAuth";
function Home4() {
  const [Guest, setGuest] = useState(0);
  const [Bedroom, setBedroom] = useState(0);
  const [Bed, setBed] = useState(0);
  const [privateBathroom, setprivateBathroom] = useState(0);
  const { user } = useCheckAuth();
  useEffect(() => {
    if (!user) {
      console.log("logout");
      location.reload();
    }
  }, [user]);
  return (
    <div>
      <h1 className="text-center mt-2 font-medium text-3xl">
        Which of these best describes your place?
      </h1>
      <div className="flex justify-center my-4  ">
        <form
          action=""
          className=" w-72 md:w-auto border-2 rounded shadow-lg flex flex-col"
        >
          <div className="flex flex-col gap-3 p-3">
            <Input type="email" color="black" label="Hosted by" required />
            <Input type="email" color="black" label="Location" required />
            <Input type="email" color="black" label="Place Name" required />
            <Input type="number" color="black" label="Price" required />
            <Textarea size="lg" label="About this space " required />
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
                  onClick={() => (Bedroom > 0 ? setBedroom(Bedroom - 1) : "")}
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
                  <span>Bedrooms</span>
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
          <div className="flex  justify-center rounded py-2">
            <input
              type="submit"
              value={"Publish your home"}
              className="bg-[#FE375C] text-white p-3 rounded"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home4;
