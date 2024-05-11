import { useEffect, useState } from "react";

import useCheckAuth, { CheckAuthProvider } from "../Hooks/checkAuth";
import Home1 from "../components/YourHomeComponents/Home1";
import Home2 from "../components/YourHomeComponents/Home2";
import Home3 from "../components/YourHomeComponents/Home3";
import Home4 from "../components/YourHomeComponents/Home4";
import useSigninModal from "../Hooks/signinModal";
import { LocalDataStoreProvider } from "../Hooks/localDataStore";
import useFireStoreData from "../Hooks/fireStoreData";
import { NavLink } from "react-router-dom";

function YourHome() {
  const { user } = useCheckAuth();
  const { openLoginModal } = useSigninModal();

  // const [currentUser, setcurrentUser] = useState();

  const handleNextStep = () => {
    if (user) {
      setCurrentStep(currentStep + 1);
    } else {
      openLoginModal();
    }
  };

  // define all function of localdatastore

  return (
    <>
      <Home1 />
      <div className="absolute  flex justify-end  right-0 bottom-4 ">
        <NavLink
          to={"/yourhome2"}
          onClick={handleNextStep}
          className="mr-8 p-3  rounded-lg text-white bg-[#FE375C]"
        >
          Get started
        </NavLink>
      </div>
    </>
  );
}

export default YourHome;
