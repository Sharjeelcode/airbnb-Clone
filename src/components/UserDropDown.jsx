import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getAuth } from "firebase/auth";
import useCheckAuth from "../Hooks/checkAuth";
import randomProfile from "../assets/profile pic.webp";
function UserDropDown() {
  const [menuBtn, setMenuBtn] = useState("hidden");
  const [profilePic, setprofilePic] = useState("");

  const menubtn = () => {
    const btn = menuBtn === "hidden" ? "flex" : "hidden";
    setMenuBtn(btn);
  };

  const { denieUser } = useCheckAuth();

  const auth = getAuth();
  useEffect(() => {
    if (auth.currentUser.photoURL !== null) {
      setprofilePic(auth.currentUser.photoURL);
    } else {
      setprofilePic(randomProfile);
    }
  }, [auth.currentUser.photoURL]);
  return (
    <>
      <div className="flex items-center px-2 py-1 border-2 rounded-full hover:shadow-md">
        <button type="button" onClick={menubtn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-4 mx-2"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
        <div className="relative inline-block text-left">
          <div
            className={`${menuBtn} absolute right-0 z-10 mt-3 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          >
            <div className="flex flex-col w-48">
              <NavLink className="text-gray-700 text-left px-4 py-2 text-sm hover:bg-gray-100">
                Messages
              </NavLink>
              <NavLink className="text-gray-700 text-left px-4 py-2 text-sm hover:bg-gray-100">
                Trips
              </NavLink>
              <NavLink className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">
                WishList
              </NavLink>
              <hr />
              <NavLink
                to={"/yourhome"}
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
              >
                Airbnb your home
              </NavLink>
              <NavLink className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">
                Accounts
              </NavLink>
              <hr />
              <NavLink className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">
                Help Center
              </NavLink>
              <button
                onClick={denieUser}
                className="text-gray-700 text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                Log out
              </button>
            </div>
          </div>
        </div>

        <img className="w-10 h-10 rounded-full" src={profilePic} />
      </div>
    </>
  );
}

export default UserDropDown;
