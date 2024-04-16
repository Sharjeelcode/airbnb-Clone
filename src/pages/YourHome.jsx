import { useState } from "react";

import useCheckAuth, { CheckAuthProvider } from "../Hooks/checkAuth";
import Home1 from "../components/YourHomeComponents/Home1";
import Home2 from "../components/YourHomeComponents/Home2";
import Home3 from "../components/YourHomeComponents/Home3";
import Home4 from "../components/YourHomeComponents/Home4";
import useSigninModal from "../Hooks/signinModal";
import { LocalDataStoreProvider } from "../Hooks/localDataStore";

function YourHome() {
  const [currentStep, setCurrentStep] = useState(1);
  const { user } = useCheckAuth();
  const { openLoginModal } = useSigninModal();
  const [placeView, setplaceView] = useState();
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

  return (
    <LocalDataStoreProvider value={{ yourplaceView, placeView }}>
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
