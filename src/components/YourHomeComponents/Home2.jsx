import React, { useEffect } from "react";
import homevideo from "../../assets/homevideo.mp4";
import useCheckAuth from "../../Hooks/checkAuth";
import { NavLink, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Home2() {
  const navigate = useNavigate();

  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/yourhome");
      }
    });
  }, [auth]);
  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap justify-around my-5 px-5">
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
      <div
        className={`w-full  border-t-2 py-4 bg-white flex  justify-between px-6 absolute   bottom-0`}
      >
        <NavLink to={"/yourhome"} className="underline">
          back
        </NavLink>

        <NavLink
          to={"/yourhome3"}
          className="px-4 py-2   rounded-lg text-white bg-gray-900"
        >
          Next
        </NavLink>
      </div>
    </>
  );
}

export default Home2;
