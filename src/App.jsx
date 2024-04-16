import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { CheckAuthProvider } from "./Hooks/checkAuth";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

function App() {
  const [footer, setfooter] = useState(false);
  const [user, setuser] = useState(null);

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
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <CheckAuthProvider value={{ user, acessUser, denieUser }}>
        <Header />
        <Outlet />
        {footer && <Footer />}
      </CheckAuthProvider>
    </>
  );
}

export default App;
