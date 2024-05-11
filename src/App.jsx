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
import { LocalDataStoreProvider } from "./Hooks/localDataStore";
import { set } from "rsuite/esm/utils/dateUtils";
function App() {
  const [footer, setfooter] = useState(false);
  const [user, setuser] = useState(null);
  const [menuBtn, setMenuBtn] = useState("hidden");
  const [SignUpmodal, setSignUpmodal] = useState();
  const [LoginModal, setSignLoginModal] = useState();
  const [currentStep, setCurrentStep] = useState(1);
  const [placeView, setplaceView] = useState();
  const [guest, setguest] = useState("");
  const [bedroom, setbedroom] = useState("");
  const [bed, setbed] = useState("");
  const [bathrom, setbathrom] = useState("");
  const [host, sethost] = useState("");
  const [location, setlocation] = useState("");
  const [placeName, setplaceName] = useState("");
  const [price, setprice] = useState("");
  const [aboutPlace, setaboutPlace] = useState("");
  const [fields, setfields] = useState(true);
  const [city, setcity] = useState("");
  const [imgFiles, setimgFiles] = useState([]);
  // render footer according to pageLocation
  const locations = useLocation();
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

  // setting data for adsdeail page
  const [adsDetail, setadsDetail] = useState();

  const pushadsDetail = (e) => {
    setadsDetail(e);
  };

  // adsDeatil image gallery
  const [gallery, setGallery] = useState(false);
  const handleGallery = () => {
    gallery === true ? setGallery(false) : setGallery(true);
  };

  const [adsCatagroy, setadsCatagroy] = useState("");

  const handleAdsCatagory = (e) => {
    setadsCatagroy(e);
  };
  //your home pages
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

  const yourfields = (e) => {
    setfields(e);
  };

  const yourcity = (e) => {
    setcity(e);
  };

  const handleImgFiles = (e) => {
    setimgFiles(e);
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
                gallery,
                adsCatagroy,
                handleGallery,
                handleAdsCatagory,
              }}
            >
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
                  fields,
                  city,
                  imgFiles,
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
                  yourfields,
                  yourcity,
                  handleImgFiles,
                }}
              >
                <Header />
                <Outlet />
              </LocalDataStoreProvider>
            </FireStoreDataProvider>
          </CheckAuthProvider>
        </SigninModalProvider>
      </CustomProvider>
    </>
  );
}

export default App;
