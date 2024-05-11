import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Landingpage from "./pages/Landingpage.jsx";
import YourHome from "./pages/YourHome.jsx";
import AdsDetail from "./pages/AdsDetail.jsx";
import Home2 from "./components/YourHomeComponents/Home2.jsx";
import Home3 from "./components/YourHomeComponents/Home3.jsx";
import Home4 from "./components/YourHomeComponents/Home4.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Landingpage />} />
      <Route path="yourhome" element={<YourHome />} />
      <Route path="yourhome2" element={<Home2 />} />
      <Route path="yourhome3" element={<Home3 />} />
      <Route path="yourhome4" element={<Home4 />} />
      <Route path="adsdetail/:id" element={<AdsDetail />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
