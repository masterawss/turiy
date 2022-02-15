import * as React from "react";
import MainLayout from "./layouts/MainLayout";
import LandingPage from "./pages/LandingPage/Index";
import Home from "./pages/Home/Index";
import RegisterGuide from "./pages/RegisterGuide/Index";
import RegistroGuia from "./pages/RegistroGuia/Index";
import Checkout from "./pages/Checkout/Index";
import { Route, Routes } from "react-router-dom";
import Preform from "./components/Guia/Preform";
import Visited from "./pages/Profile/Show/Visited";
import Saved from "./pages/Profile/Show/Saved";
import Review from "./pages/Place/Show/Review";
import { Place } from "./pages/Place/Place";
import { ShowGuide } from "./pages/Profile/Show/ShowGuide";

// PLACE --------------------------
// place/           -> INDEX
// place/:id        -> SHOW
// place/:id/create -> CREATE
// place/:id/edit   -> EDIT

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path="" element={<LandingPage/>} />
        <Route path="home" element={<Home/>} />
        <Route path="place" element={<Place/>} />
        <Route path="/profile/show/visited" element={<Visited/>} />
        <Route path="/profile/show/saved" element={<Saved/>} />
        <Route path="/place/show/review" element={<Review/>} />
        <Route path="/profile/show/guia" element={<ShowGuide/>} />
        <Route path="profile/user/:id/show" element={<RegisterGuide/>} />
        <Route path="profile/guide_register/:id/create" element={<RegistroGuia/>} />
        <Route path="profile/checkout" element={<Checkout/>} />
        <Route path="profile/guide_register/:id/create" element={<Preform/>} />
      </Route>
    </Routes>
  );
}

export default App;
