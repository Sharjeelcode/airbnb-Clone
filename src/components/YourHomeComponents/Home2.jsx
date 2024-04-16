import React, { useEffect } from "react";
import homevideo from "../../assets/homevideo.mp4";
import useCheckAuth from "../../Hooks/checkAuth";

function Home2() {
  const { user } = useCheckAuth();

  useEffect(() => {
    if (!user) {
      console.log("logout");
      location.reload();
    }
  }, [user]);

  return (
    <div className="flex justify-around my-5 px-5">
      <div className="flex flex-col  justify-center">
        <h1 className="text-lg">Step 1</h1>
        <h1 className="text-4xl font-semibold py-3 text-gray-900">
          Tell us about your place
        </h1>
        <p className="text-lg">
          In this step, we'll ask you which type of property you have and if{" "}
          <br />
          guests will book the entire place or just a room. Then let us know the{" "}
          <br /> location and how many guests can stay.
        </p>
      </div>
      <div>
        <video src={homevideo} autoPlay className="h-96 w-96"></video>
      </div>
    </div>
  );
}

export default Home2;
