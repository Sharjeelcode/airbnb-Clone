import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [footer, setfooter] = useState(false);
  const location = useLocation();
  useEffect(() => {
    location.pathname === "/yourhome" ? setfooter(false) : setfooter(true);
  }, [location.pathname]);
  return (
    <>
      <Header />
      <Outlet />
      {footer && <Footer />}
    </>
  );
}

export default App;
