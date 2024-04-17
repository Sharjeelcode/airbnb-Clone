import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { CheckAuthProvider } from "./Hooks/checkAuth";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { SigninModalProvider } from "./Hooks/signinModal";
import { FireStoreDataProvider } from "./Hooks/fireStoreData";

function App() {
  const [footer, setfooter] = useState(false);
  const [user, setuser] = useState(null);
  const [menuBtn, setMenuBtn] = useState("hidden");
  const [SignUpmodal, setSignUpmodal] = useState();
  const [LoginModal, setSignLoginModal] = useState();
  const [adsData, setadsData] = useState([]);

  // render footer according to pageLocation
  const location = useLocation();
  useEffect(() => {
    location.pathname === "/yourhome" ? setfooter(false) : setfooter(true);
  }, [location.pathname]);

  const auth = getAuth();

  //logoutUser
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
      setSignLoginModal(false);
      setSignUpmodal(false);
    } catch (error) {
      console.log(error);
    }
  };

  // modal show and hide
  const openLoginModal = () => {
    setMenuBtn("hidden");
    setSignLoginModal(true);
  };

  const closeLoginModal = () => {
    setSignLoginModal(false);
  };
  const openSignUpModal = () => {
    setSignUpmodal(true);
    setMenuBtn("hidden");
  };

  const closeSignUpModal = () => {
    setSignUpmodal(false);
  };

  const toggleMenubtn = () => {
    const btn = menuBtn === "hidden" ? "flex" : "hidden";
    setMenuBtn(btn);
  };

  //ads data getting from firestore and push to app

  const pushadsData = (e) => {
    setadsData((prevAdsData) => [...prevAdsData, e]);
  };
  // console.log(adsData);

  return (
    <>
      <SigninModalProvider
        value={{
          SignUpmodal,
          LoginModal,
          menuBtn,
          openSignUpModal,
          closeSignUpModal,
          openLoginModal,
          closeLoginModal,
          toggleMenubtn,
        }}
      >
        <CheckAuthProvider value={{ user, acessUser, denieUser }}>
          <FireStoreDataProvider value={{ adsData, pushadsData }}>
            <Header />
            <Outlet />
            {footer && <Footer />}
          </FireStoreDataProvider>
        </CheckAuthProvider>
      </SigninModalProvider>
    </>
  );
}

export default App;
