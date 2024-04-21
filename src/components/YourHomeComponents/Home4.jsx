import React, { useEffect, useState } from "react";
import {
  Input,
  Textarea,
  Spinner,
  Select,
  Option,
} from "@material-tailwind/react";
import UploadImages from "../UploadImages";
import useCheckAuth from "../../Hooks/checkAuth";
import useLocalDataStore from "../../Hooks/localDataStore";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { database } from "../../Firebase/config";
import { Navigate, useNavigate } from "react-router-dom";

function Home4() {
  const [Guest, setGuest] = useState(0);
  const [Bedroom, setBedroom] = useState(0);
  const [Bed, setBed] = useState(0);
  const [privateBathroom, setprivateBathroom] = useState(0);
  const [publish, setpublish] = useState("hidden");
  const navigate = useNavigate();
  const { user } = useCheckAuth();
  // checks current user authentication
  useEffect(() => {
    if (!user) {
      console.log("logout");
      location.reload();
    }
  }, [user]);

  const {
    host,
    location,
    placeName,
    price,
    aboutPlace,
    placeView,
    guest,
    bedroom,
    bed,
    bathrom,
    image,
    fields,
    city,
    yourhost,
    yourguest,
    yourbathrom,
    yourbed,
    yourbedroom,
    yourprice,
    yourlocation,
    yourplaceName,
    youraboutPlace,
    yourcity,
    yourfields,
  } = useLocalDataStore();

  const useUplaodData = async (e) => {
    e.preventDefault();
    setpublish("block");
    try {
      const docRef = await addDoc(collection(database, "Ads"), {
        host: host,
        location: location,
        placeName: placeName,
        price: price,
        aboutPlace: aboutPlace,
        placeView: placeView,
        guest: guest,
        bedroom: bedroom,
        bed: bed,
        bathrom: bathrom,
        image: image,
        city: city,
      });
      setpublish("hidden");
      console.log("data added");
      navigate("/");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  console.log(city);
  return (
    <div>
      <h1 className="text-center mt-2 font-medium text-3xl">
        Which of these best describes your place?
      </h1>
      <div className="flex justify-center my-4  ">
        <form
          onSubmit={useUplaodData}
          className=" w-72 md:w-auto border-2 rounded shadow-lg flex flex-col"
        >
          <div className="flex flex-col gap-3 p-3">
            <Input
              type="text"
              color="black"
              label="Hosted by"
              required={host != "" ? false : true}
              value={host}
              onChange={(e) => yourhost(e.target.value)}
            />

            <Input
              type="text"
              color="black"
              label="Place Name"
              required={placeName != "" ? false : true}
              value={placeName}
              onChange={(e) => yourplaceName(e.target.value)}
            />
            <Select
              label="Select City"
              value={city}
              onChange={(e) => yourcity(e.target.value)}
            >
              <Option value="Karachi">Karachi</Option>
              <Option value="Lahore">Lahore</Option>
              <Option value="Islamabad">Islamabad</Option>
              <Option value="Quetta">Quetta</Option>
              <Option value="Rawalpindi">Rawalpindi</Option>
            </Select>
            <Input
              type="text"
              color="black"
              label="Location"
              required={location != "" ? false : true}
              value={location}
              onChange={(e) => yourlocation(e.target.value)}
            />
            <Input
              type="number"
              color="black"
              label="Price"
              required={price != "" ? false : true}
              value={price}
              onChange={(e) => yourprice(e.target.value)}
            />
            <Textarea
              size="lg"
              label="About this space "
              required={aboutPlace != "" ? false : true}
              value={aboutPlace}
              onChange={(e) => youraboutPlace(e.target.value)}
            />
          </div>
          <div>
            <div className="flex items-center justify-between gap-4 p-2">
              <label
                for="Guest"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Guests
              </label>
              <div className="relative flex items-center max-w-[11rem]">
                <button
                  onClick={() => (Guest > 0 ? setGuest(Guest - 1) : "")}
                  type="button"
                  id="decrement-button"
                  data-input-counter-decrement="bedrooms-input"
                  className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                >
                  <svg
                    className="w-3 h-3 text-gray-900 dark:text-white"
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
                  id="Guest"
                  data-input-counter
                  data-input-counter-min="1"
                  data-input-counter-max="5"
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  value={Guest}
                  required
                  onChange={yourguest(Guest)}
                />
                <div className="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse">
                  <span>Guests</span>
                </div>
                <button
                  onClick={() => setGuest(Guest + 1)}
                  type="button"
                  id="increment-button"
                  data-input-counter-increment="bedrooms-input"
                  className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                >
                  <svg
                    className="w-3 h-3 text-gray-900 dark:text-white"
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
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Bedrooms
              </label>
              <div className="relative flex items-center max-w-[11rem]">
                <button
                  onClick={() => (Bedroom > 0 ? setBedroom(Bedroom - 1) : "")}
                  type="button"
                  id="decrement-button"
                  data-input-counter-decrement="bedrooms-input"
                  className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                >
                  <svg
                    className="w-3 h-3 text-gray-900 dark:text-white"
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
                  className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  value={Bedroom}
                  required
                  onChange={yourbedroom(Bedroom)}
                />
                <div className="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse">
                  <span>Bedrooms</span>
                </div>
                <button
                  onClick={() => setBedroom(Bedroom + 1)}
                  type="button"
                  id="increment-button"
                  data-input-counter-increment="bedrooms-input"
                  className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                >
                  <svg
                    className="w-3 h-3 text-gray-900 dark:text-white"
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
                for="Bed"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Beds
              </label>
              <div className="relative flex items-center max-w-[11rem]">
                <button
                  onClick={() => (Bed > 0 ? setBed(Bed - 1) : "")}
                  type="button"
                  id="decrement-button"
                  data-input-counter-decrement="bedrooms-input"
                  className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                >
                  <svg
                    className="w-3 h-3 text-gray-900 dark:text-white"
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
                  id="Bed"
                  data-input-counter
                  data-input-counter-min="1"
                  data-input-counter-max="5"
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  value={Bed}
                  required
                  onChange={yourbed(Bed)}
                />
                <div className="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse">
                  <span>Beds</span>
                </div>
                <button
                  onClick={() => setBed(Bed + 1)}
                  type="button"
                  id="increment-button"
                  data-input-counter-increment="bedrooms-input"
                  className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                >
                  <svg
                    className="w-3 h-3 text-gray-900 dark:text-white"
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
                for="Bathrooms"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Private Bathrooms
              </label>
              <div className="relative flex items-center max-w-[11rem]">
                <button
                  onClick={() =>
                    privateBathroom > 0
                      ? setprivateBathroom(privateBathroom - 1)
                      : ""
                  }
                  type="button"
                  id="decrement-button"
                  data-input-counter-decrement="bedrooms-input"
                  className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                >
                  <svg
                    className="w-3 h-3 text-gray-900 dark:text-white"
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
                  id="Bathrooms"
                  data-input-counter
                  data-input-counter-min="1"
                  data-input-counter-max="5"
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  value={privateBathroom}
                  required
                  onChange={yourbathrom(privateBathroom)}
                />
                <div className="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse">
                  <span>Bathrooms</span>
                </div>
                <button
                  onClick={() => setprivateBathroom(privateBathroom + 1)}
                  type="button"
                  id="increment-button"
                  data-input-counter-increment="bedrooms-input"
                  className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                >
                  <svg
                    className="w-3 h-3 text-gray-900 dark:text-white"
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
          {!fields ? (
            ""
          ) : (
            <p className="text-center text-red-500 text-sm">
              Upload some images
            </p>
          )}
          <div className={`${publish}  flex justify-center my-1`}>
            <span className="px-4">Publishing </span> <Spinner />
          </div>

          <div className="flex  justify-center rounded py-2">
            <button
              type="submit"
              disabled={fields}
              className={`
              ${fields}${
                !fields ? "" : " bg-gray-400 cursor-wait"
              }   text-white p-3 rounded bg-[#FE375C] cursor-pointer`}
            >
              Publish your home
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home4;
