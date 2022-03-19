import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { getAuthUser } from 'api/AuthApi'

export const fetchUser = createAsyncThunk('auth/fetUser', async() => {
    return await getAuthUser()
})

export const slice = createSlice({
    name: 'auth',
    initialState: {
        user: {},
        isLoggedIn: false,
    },
    reducers: {
        setUser: (state, action) => {
            console.log('SET_USER');
            state.user = action.payload
        },
        setIsLoggedIn: (state, action) => {
            console.log('SET_ISLOGGEDIN');

            state.isLoggedIn = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            console.log('LOGGEDIN 1');
            if(action.payload?.id){
                console.log('LOGGEDIN');
                state.user = action.payload
                state.isLoggedIn = true
            }
        })
    },
})
export const { setUser, setIsLoggedIn } = slice.actions;

export const logoutAction = (dispatch, state) => {
    console.log('LOGOUT_ACTION');
    dispatch(setUser({}))
    dispatch(setIsLoggedIn(false))
    localStorage.setItem('token', null)
}

export const loginAction = (dispatch, state, user) => {
    console.log('LOGIN_ACTION');
    dispatch(setIsLoggedIn(true))
    dispatch(fetchUser())
}

export default slice.reducer
