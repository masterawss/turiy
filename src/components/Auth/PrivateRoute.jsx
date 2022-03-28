import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export const PrivateRoute= ({children}) => {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    // const isLoggedIn = true;
    console.log('LOGGED IN', isLoggedIn);


    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(fetchUser())
    //     console.log('asdad');
    // }, [isLoggedIn, dispatch]);

    return isLoggedIn 
        ? children
        : <Navigate to="/" />
}