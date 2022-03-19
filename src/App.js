import * as React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LandingPage from "./pages/LandingPage/Index";
import Home from "./pages/Home/Index";

import {PrivateRoute} from "components/Auth/PrivateRoute";
import { useDispatch } from "react-redux";
import { fetchUser } from "store/auth/authSlice";

import PlaceShow from "./pages/Place/Show";
import UserShow from "./pages/User/Show";
import {Profile as AuthProfile} from "./pages/Auth/Profile";
import {GuideRegister} from "./pages/Auth/GuideRegister";

function App() {

  const dispatch = useDispatch()
  React.useEffect(() => {
      dispatch(fetchUser())
      console.log('APP');
  }, [dispatch]);
    
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path="" element={<LandingPage/>} />
        <Route path="/*" element={
          <PrivateRoute>
            <Routes>
              <Route path="home" element={<Home/>} />
              <Route path="place/:id" element={<PlaceShow/>} />
              <Route path="user/:id" element={<UserShow/>} />

              <Route path="profile" element={<AuthProfile/>} />
              <Route path="register-guide" element={<GuideRegister/>} />

              {/* <Route path="user/">
                <Route path=":id/" element={<Pages/User/Show/>}>
                  <Route path="visited" element={<Component/User/VisitedSection/>}></Route>
                  <Route path="saved" element={<Component/User/SavedSection/>}></Route>
                </Route>
              </Route>

              <Route path="profile/">
                <Route path="configuration" element={<Pages/Profile/Configuration/>} />
                <Route path="checkout" element={<Pages/Profile/Checkout/>} />
                <Route path="guide_register" element={<Pages/Profile/GuideRegister/>} />
              </Route> */}
            </Routes>
          </PrivateRoute>
        } />
      </Route>
    </Routes>
    // <Routes>
    //   <Route path="/" element={<MainLayout/>}>
    //     <Route path="" element={<LandingPage/>} />
    //     <Route path="/*" element={
    //       <PrivateRoute>
    //         <Routes>
    //           <Route path="home" element={<Home/>} />
    //           <Route path="place/:id/" element={<Place/>}>
    //             <Route path="publication" element={<Publication/>}/>
    //             <Route path="review" element={<Review/>} />
    //           </Route>  
    //           <Route path="/guide" element={<Guide/>} />
    //           <Route path="/profile/visited" element={<VisitedPlace/>} />
    //           <Route path="/profile/saved" element={<SavedPlace/>} /> 
    //           <Route path="profile/user/:id/show" element={<RegisterGuide/>} />
    //           <Route path="profile/guide_register/:id/create" element={<RegistroGuia/>} />
    //           <Route path="profile/checkout" element={<Checkout/>} />
    //           <Route path="profile/guide_register/:id/create" element={<Preform/>} />
    //         </Routes>
    //       </PrivateRoute>
    //     }/>
    //   </Route>
    // </Routes>
  );
}

export default App;

