// import logo from './logo.svg';
import * as React from "react";
import MainLayout from "./layouts/MainLayout";
import LandingPage from "./pages/LandingPage/Index";
import Home from "./pages/Home/Index";
import RegisterGuide from "./pages/RegisterGuide/Index";
import RegistroGuia from "./pages/RegistroGuia/Index";
import Checkout from "./pages/Checkout/Index";
import { Route, Routes } from "react-router-dom";
import Preform from "./components/Guia/Preform";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path="" element={<LandingPage/>} />
        <Route path="home" element={<Home/>} />
        <Route path="perfil" element={<RegisterGuide/>} />
        <Route path="checkout" element={<Checkout/>} />
        <Route path="preform" element={<Preform/>} />
        <Route path="registro_guia" element={<RegistroGuia/>} />
      </Route>
    </Routes>
  );
}

export default App;
