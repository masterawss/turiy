import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {fetchUser} from 'store/auth/authSlice'
export const PrivateRoute= ({children}) => {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(fetchUser())
    //     console.log('asdad');
    // }, [isLoggedIn, dispatch]);

    return isLoggedIn 
        ? children
        : <Navigate to="/" />
}