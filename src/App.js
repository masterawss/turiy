import * as React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LandingPage from "./pages/LandingPage/Index";
import Home from "./pages/Home/Index";
import Publication from "./pages/Place/Index";
import Review from "./pages/Place/Review";
import Visited from "./pages/Profile/Show/Visited";
import Saved from "./pages/Profile/Show/Saved";
import Guide from './pages/Guide/Guide';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path="" element={<LandingPage/>} />
        <Route path="home" element={<Home/>} />
        <Route path="/place/publication" element={<Publication/>} />
        <Route path="/place/review" element={<Review/>} />
        <Route path="/guide" element={<Guide/>} />
        <Route path="/profile/show/visited" element={<Visited/>} />
        <Route path="/profile/show/saved" element={<Saved/>} />        
      </Route>
    </Routes>
  );
}

export default App;
