import * as React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LandingPage from "./pages/LandingPage/Index";
import Home from "./pages/Home/Index";
import PublicationPlace from "./pages/Place/Index";
import ReviewPlace from "./pages/Place/Review";
import VisitedPlace from "./pages/Profile/Visited";
import SavedPlace from "./pages/Profile/Saved";
import Guide from './pages/Guide/Guide';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path="" element={<LandingPage/>} />
        <Route path="home" element={<Home/>} />
        <Route path="/place/publication" element={<PublicationPlace/>} />
        <Route path="/place/review" element={<ReviewPlace/>} />
        <Route path="/guide" element={<Guide/>} />
        <Route path="/profile/visited" element={<VisitedPlace/>} />
        <Route path="/profile/saved" element={<SavedPlace/>} />        
      </Route>
    </Routes>
  );
}

export default App;
