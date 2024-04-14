import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import HeaderSeachBar from "./HeaderSeachBar";
import GuestDropDown from "./GuestDropDown";
import UserDropDown from "./UserDropDown";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { CheckAuthProvider } from "../Hooks/checkAuth";
import MobileHeader from "./MobileHeader";
import Catagorybar from "./Catagorybar";
import { NavLink } from "react-router-dom";
function Header() {
  const [user, setuser] = useState();

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(true);
      } else {
        setuser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const acessUser = () => {
    setuser(true);
  };

  const denieUser = async () => {
    try {
      signOut(auth);
      setuser(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <CheckAuthProvider value={{ user, acessUser, denieUser }}>
      {/* header for mobile devices */}
      <MobileHeader />

      {/* header for large devices */}
      <div className="z-50 hidden sticky bg-white top-0 border-b-2 md:pb-2 md:block">
        <div className="px-10 h-16 flex items-center justify-between">
          <NavLink to={"/"}>
            <img className="hidden md:block w-8 h-8 md:mr-48" src={logo} />
          </NavLink>
          <div className="flex w-96  justify-around">
            <span className="rounded-full  px-4 py-2 hover:bg-gray-100 hover:text-black">
              Stays
            </span>
            <span className="rounded-full text-gray-400 px-4 py-2 hover:bg-gray-100 hover:text-black">
              Experiences
            </span>
            <span className="rounded-full text-gray-400  px-4 py-2 hover:bg-gray-100 hover:text-black">
              Online Experiences
            </span>
          </div>
          <div className="flex items-center gap-3">
            <NavLink to={"yourhome"}>
              <span className="rounded-full px-3 text-md py-2 hover:bg-gray-100 hover:text-black">
                Airbnb your home
              </span>
            </NavLink>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              className="w-4 h-6 mr-2"
            >
              <path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z" />
            </svg>
            {user === true ? <UserDropDown /> : <GuestDropDown />}
          </div>
        </div>
        <HeaderSeachBar />
        <Catagorybar />
      </div>
    </CheckAuthProvider>
  );
}

export default Header;
