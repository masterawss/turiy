import * as React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LandingPage from "./pages/LandingPage/Index";
import Home from "./pages/Home/Index";
import RegisterGuide from "./pages/RegisterGuide/Index";
import RegistroGuia from "./pages/RegistroGuia/Index";
import Checkout from "./pages/Checkout/Index";

import Preform from "./components/Guia/Preform";
import Place from "./pages/Place/Index";
import Publication from "./pages/Place/Publication";
import Review from "./pages/Place/Review";
import VisitedPlace from "./pages/Profile/Visited";
import SavedPlace from "./pages/Profile/Saved";
import Guide from './pages/Guide/Guide';
import {PrivateRoute} from "components/Auth/PrivateRoute";
import { useDispatch } from "react-redux";
import { fetchUser } from "store/auth/authSlice";

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
// profile/configuration    -> Obtiene siempre el id del usuario de sesión
// profile/checkout         -> Obtiene siempre el id del usuario de sesión
// profile/guide_register   -> Obtiene siempre el id del usuario de sesión

/* <Routes>
  <Route path="/" element={<MainLayout/>}>
    <Route path="" element={<LandingPage/>} />
    <Route path="home" element={<Pages/Home/Index/>} />

    <Route path="place/">
      // <Route path="" element={<Pages/Place/Index/>} />
      <Route path=":id" element={<Pages/Place/Show/>}>
        <Route path="reviews" element={<Component/Place/ReviewSection/>}></Route>
      </Route>
    </Route>

    <Route path="user/">
      <Route path=":id/" element={<Pages/User/Show/>}>
        <Route path="visited" element={<Component/User/VisitedSection/>}></Route>
        <Route path="saved" element={<Component/User/SavedSection/>}></Route>
      </Route>
    </Route>

    <Route path="profile/">
      <Route path="configuration" element={<Pages/Profile/Configuration/>} />
      <Route path="checkout" element={<Pages/Profile/Checkout/>} />
      <Route path="guide_register" element={<Pages/Profile/GuideRegister/>} />
    </Route>
  </Route>
</Routes> */


function App() {

  const dispatch = useDispatch()
  React.useEffect(() => {
      dispatch(fetchUser())
      console.log('asdad');
  }, [dispatch]);
    
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path="" element={<LandingPage/>} />
        <Route path="/*" element={
          <PrivateRoute>
            <Routes>
              <Route path="home" element={<Home/>} />
              <Route path="place/:id/" element={<Place/>}>
                <Route path="publication" element={<Publication/>}/>
                <Route path="review" element={<Review/>} />
              </Route>  
              <Route path="/guide" element={<Guide/>} />
              <Route path="/profile/visited" element={<VisitedPlace/>} />
              <Route path="/profile/saved" element={<SavedPlace/>} /> 
              <Route path="profile/user/:id/show" element={<RegisterGuide/>} />
              <Route path="profile/guide_register/:id/create" element={<RegistroGuia/>} />
              <Route path="profile/checkout" element={<Checkout/>} />
              <Route path="profile/guide_register/:id/create" element={<Preform/>} />
            </Routes>
          </PrivateRoute>
        }/>
      </Route>
    </Routes>
  );
}

export default App;

