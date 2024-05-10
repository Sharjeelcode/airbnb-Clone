import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import HeaderSeachBar from "./HeaderSeachBar";
import GuestDropDown from "./GuestDropDown";
import UserDropDown from "./UserDropDown";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import useCheckAuth, { CheckAuthProvider, checkAuth } from "../Hooks/checkAuth";
import Catagorybar from "./Catagorybar";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { ScissorsLineDashedIcon } from "lucide-react";
function Header() {
  const [Head, setHead] = useState(true);
  const { user } = useCheckAuth();
  ScissorsLineDashedIcon;
  // checks the page location and changes the header
  const id = useParams();
  const location = useLocation();
  useEffect(() => {
    const validPaths = ["/yourhome", `/adsdetail/${id.id}`];
    validPaths.includes(location.pathname) ? setHead(false) : setHead(true);
  }, [location.pathname]);

  return (
    <>
      <div className="z-50  sticky bg-white top-0 border-b-2  md:block">
        <div className=" px-1 md:px-10 h-12 md:h-16 flex items-center md:justify-between">
          <div className="xl:mr-40">
            <NavLink to={"/"} className="flex items-center gap-1">
              <img className="ml-2 w-10 h-8 " src={logo} />
              <span className="text-[#FF385C] font-bold text-lg hidden md:block">
                airbnb
              </span>
            </NavLink>
          </div>
          <div className="text-xs md:text-base  gap-0  flex md:gap-2 w-96 justify-center lg:justify-start">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${
                  isActive ? "text-black" : "text-gray-400"
                } px-2 md:px-4 cursor-pointer text-md py-2  hover:bg-gray-100 hover:text-black rounded-full`
              }
            >
              <span>Stays</span>
            </NavLink>

            <NavLink
              to={"/yourhome"}
              className={({ isActive }) =>
                `${
                  isActive ? "text-black" : "text-gray-400"
                } px-4 cursor-pointer text-md py-2    hover:bg-gray-100 hover:text-black rounded-full`
              }
            >
              Airbnb your home
            </NavLink>
          </div>
          <div className="flex items-center gap-3 shadow-md rounded-full">
            {user === true ? <UserDropDown /> : <GuestDropDown />}
          </div>
        </div>
        {Head && (
          <div>
            <Catagorybar />
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
