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
import { Success } from "pages/Checkout/Success";

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
        <Route path="landing-page/:pageId" element={<LandingPage/>} />
        <Route path="/*" element={
          <PrivateRoute>
            <Routes>
              <Route path="home" element={<Home/>} />
              <Route path="place/:id" element={<PlaceShow/>} />
              <Route path="user/:id" element={<UserShow/>} />

              <Route path="profile" element={<AuthProfile/>} />

              <Route path="checkout-success" element={<Success/>} />
            </Routes>
          </PrivateRoute>
        } />
      </Route>
    </Routes>
  );
}

export default App;

