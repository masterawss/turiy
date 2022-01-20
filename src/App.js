// import logo from './logo.svg';
import * as React from "react";
import MainLayout from "./layouts/MainLayout";
import LandingPage from "./pages/LandingPage/Index";
import Home from "./pages/Home/Index";
import Visitados from "./pages/Profile/Show/Visitados";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path="" element={<LandingPage/>} />
        <Route path="home" element={<Home/>} />
        <Route path="/profile/show/visitados" element={<Visitados/>} />
      </Route>
    </Routes>
  );
}

export default App;
