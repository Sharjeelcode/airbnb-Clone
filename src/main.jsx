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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Landingpage />} />
      <Route path="yourhome" element={<YourHome />} />
      <Route path="adsdetail" element={<AdsDetail />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
