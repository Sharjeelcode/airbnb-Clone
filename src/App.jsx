import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { CheckAuthProvider } from "./Hooks/checkAuth";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { SigninModalProvider } from "./Hooks/signinModal";
import { FireStoreDataProvider } from "./Hooks/fireStoreData";
// import "rsuite/styles/index.less";
import { CustomProvider } from "rsuite";
import { collection, getDocs } from "firebase/firestore";
import { database } from "./Firebase/config";
function App() {
  const [footer, setfooter] = useState(false);
  const [user, setuser] = useState(null);
  const [menuBtn, setMenuBtn] = useState("hidden");
  const [SignUpmodal, setSignUpmodal] = useState();
  const [LoginModal, setSignLoginModal] = useState();

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

  const [adsData, setadsData] = useState([]);
  const pushadsData = (e) => {
    setadsData(e);
  };
  // setting data for adsdeail page
  const [adsDetail, setadsDetail] = useState();

  const pushadsDetail = (e) => {
    setadsDetail(e);
  };

  // adsDeatil image gallery
  const [gallery, setGallery] = useState(false);
  const handleGallery = () => {
    gallery === true ? setGallery(false) : setGallery(true);
    console.log("hello");
  };
  return (
    <>
      <CustomProvider>
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
            <FireStoreDataProvider
              value={{
                pushadsDetail,
                adsDetail,
                gallery,
                handleGallery,
              }}
            >
              <Header />
              <Outlet />
              {footer && <Footer />}
            </FireStoreDataProvider>
          </CheckAuthProvider>
        </SigninModalProvider>
      </CustomProvider>
    </>
  );
}

export default App;
