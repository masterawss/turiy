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

// HOME --------------------------
// home/

// PLACE --------------------------
// place/           -> INDEX
// place/:id        -> SHOW
// place/:id/create -> CREATE
// place/:id/edit   -> EDIT

// USER ------------------------
// user/:id        -> SHOW

// PROFILE ------------------------
// configuration    -> Obtiene siempre el id del usuario de sesión
// checkout         -> Obtiene siempre el id del usuario de sesión
// guide_register   -> Obtiene siempre el id del usuario de sesión

/* <Routes>
  <Route path="/" element={<MainLayout/>}>
    <Route path="" element={<LandingPage/>} />
    <Route path="home" element={<Pages/Home/Index/>} />
    
    <Route path="place" element={<Pages/Place/Index/>} />
    <Route path="place/:id" element={<Pages/Place/Show/>} />

    <Route path="user/:id" element={<Pages/User/Show/>} />
    
    <Route path="configuration" element={<Pages/Profile/Configuration/>} />
    <Route path="checkout" element={<Pages/Profile/Checkout/>} />
    <Route path="guide_register" element={<Pages/Profile/GuideRegister/>} />

  </Route>
</Routes> */


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
        
        <Route path="perfil:id" element={<RegisterGuide/>} />
        <Route path="registro_guia" element={<RegistroGuia/>} />
        <Route path="pagos" element={<Checkout/>} />
        <Route path="validacion" element={<Preform/>} />
      </Route>
    </Routes>
  );
}

export default App;
