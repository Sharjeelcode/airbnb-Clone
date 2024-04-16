import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { CheckAuthProvider } from "./Hooks/checkAuth";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { SigninModalProvider } from "./Hooks/signinModal";

function App() {
  const [footer, setfooter] = useState(false);
  const [user, setuser] = useState(null);
  const [menuBtn, setMenuBtn] = useState("hidden");
  const [SignUpmodal, setSignUpmodal] = useState();
  const [LoginModal, setSignLoginModal] = useState();

  const location = useLocation();
  useEffect(() => {
    location.pathname === "/yourhome" ? setfooter(false) : setfooter(true);
  }, [location.pathname]);

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
      setSignLoginModal(false);
      setSignUpmodal(false);
    } catch (error) {
      console.log(error);
    }
  };

  // modal

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
          <Header />
          <Outlet />
          {footer && <Footer />}
        </CheckAuthProvider>
      </SigninModalProvider>
    </>
  );
}

export default App;
