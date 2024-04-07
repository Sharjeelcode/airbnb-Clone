import React, { useState } from "react";
import profilepic from "../assets/profile pic.webp";
import { SigninModalProvider } from "../Hooks/signinModal";
import Signup from "../Modals/Signup";
import Login from "../Modals/Login";

function GuestDropDown() {
  const [menuBtn, setMenuBtn] = useState("hidden");
  const [SignUpmodal, setSignUpmodal] = useState();
  const [LoginModal, setSignLoginModal] = useState();

  const openSignUpModal = () => {
    setMenuBtn("hidden");
    setSignUpmodal(true);
  };

  const CloseSignUpModal = () => {
    setSignUpmodal(false);
  };
  const openLoginModal = () => {
    setMenuBtn("hidden");
    setSignLoginModal(true);
  };

  const closeLoginModal = () => {
    setSignLoginModal(false);
  };

  const menubtn = () => {
    const btn = menuBtn === "hidden" ? "flex" : "hidden";
    setMenuBtn(btn);
  };

  return (
    <SigninModalProvider
      value={{
        SignUpmodal,
        LoginModal,
        openSignUpModal,
        CloseSignUpModal,
        openLoginModal,
        closeLoginModal,
      }}
    >
      <div className="flex items-center  px-2 py-1 border-2 rounded-full hover:shadow-md">
        <button type="button" onClick={menubtn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-4 h-4 mx-2"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
        <div className="relative inline-block text-left">
          <div
            className={`${menuBtn} absolute right-0 z-10 mt-3 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          >
            <div className="w-48">
              <button
                onClick={openLoginModal}
                className="text-gray-700 w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                Login
              </button>
              <button
                onClick={openSignUpModal}
                className="text-gray-700 w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                Sign up
              </button>
              <hr />
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
              >
                Airbnb your home
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
              >
                Help center
              </a>
            </div>
          </div>
        </div>

        <img className="w-10 h-10 rounded-full" src={profilepic} />
      </div>
      {SignUpmodal && <Signup />}
      {LoginModal && <Login />}
    </SigninModalProvider>
  );
}

export default GuestDropDown;