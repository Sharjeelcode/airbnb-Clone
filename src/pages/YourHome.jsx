import { useState } from "react";

import useCheckAuth, { CheckAuthProvider } from "../Hooks/checkAuth";
import Home1 from "../components/YourHomeComponents/Home1";
import Home2 from "../components/YourHomeComponents/Home2";
import Home3 from "../components/YourHomeComponents/Home3";
import Home4 from "../components/YourHomeComponents/Home4";
import useSigninModal from "../Hooks/signinModal";
import { LocalDataStoreProvider } from "../Hooks/localDataStore";
import useFireStoreData from "../Hooks/fireStoreData";

function YourHome() {
  const [currentStep, setCurrentStep] = useState(1);
  const { user } = useCheckAuth();
  const { openLoginModal } = useSigninModal();
  const [placeView, setplaceView] = useState();
  const [guest, setguest] = useState(0);
  const [bedroom, setbedroom] = useState(0);
  const [bed, setbed] = useState(0);
  const [bathrom, setbathrom] = useState(0);
  const [host, sethost] = useState("");
  const [location, setlocation] = useState("");
  const [placeName, setplaceName] = useState("");
  const [price, setprice] = useState(0);
  const [aboutPlace, setaboutPlace] = useState("");
  const [image, setimage] = useState([]);
  // const [currentUser, setcurrentUser] = useState();

  const handleNextStep = () => {
    if (currentStep < 4 && user) {
      setCurrentStep(currentStep + 1);
    } else {
      openLoginModal();
    }
  };
  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  // define all function of localdatastore

  const yourplaceView = (e) => {
    setplaceView(e);
  };
  const yourguest = (e) => {
    setguest(e);
  };
  const yourbedroom = (e) => {
    setbedroom(e);
  };
  const yourbed = (e) => {
    setbed(e);
  };
  const yourbathrom = (e) => {
    setbathrom(e);
  };
  const yourhost = (e) => {
    sethost(e);
  };
  const yourlocation = (e) => {
    setlocation(e);
  };
  const yourplaceName = (e) => {
    setplaceName(e);
  };
  const youraboutPlace = (e) => {
    setaboutPlace(e);
  };
  const yourprice = (e) => {
    setprice(e);
  };
  const yourimage = (e) => {
    setimage([...image, e]);
  };

  return (
    <LocalDataStoreProvider
      value={{
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
        yourhost,
        yourlocation,
        yourplaceView,
        yourplaceName,
        youraboutPlace,
        yourprice,
        yourguest,
        yourbedroom,
        yourbed,
        yourbathrom,
        yourimage,
      }}
    >
      {currentStep === 1 && <Home1 />}

      {currentStep === 2 && <Home2 />}

      {currentStep === 3 && <Home3 />}
      {currentStep === 4 && <Home4 />}

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
    </LocalDataStoreProvider>
  );
}

export default YourHome;
