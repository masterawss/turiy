// import logo from './logo.svg';
import * as React from "react";
import MainLayout from "./layouts/MainLayout";
import LandingPage from "./pages/LandingPage/Index";
import Home from "./pages/Home/Index";
import Visited from "./pages/Profile/Show/Visited";
import Saved from "./pages/Profile/Show/Saved";
import Review from "./pages/Place/Show/Review";
import { Route, Routes } from "react-router-dom";
import { Place } from "./pages/ShowPlace/Place";
import Guide from './pages/Guide/Guide';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path="" element={<LandingPage/>} />
        <Route path="home" element={<Home/>} />
        <Route path="place" element={<Place/>} />
        <Route path="/guide" element={<Guide/>} />
        <Route path="/profile/show/visited" element={<Visited/>} />
        <Route path="/profile/show/saved" element={<Saved/>} />
        <Route path="/place/show/review" element={<Review/>} />
      </Route>
    </Routes>
  );
}

export default App;
