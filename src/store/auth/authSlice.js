import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { getUser } from 'api/AuthApi'

export const fetchUser = createAsyncThunk('auth/fetUser', async() => {
    return await getUser()
})

export const slice = createSlice({
    name: 'auth',
    initialState: {
        user: {},
        isLoggedIn: false,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.user = action.payload
            if(state.user.id) state.isLoggedIn = true
        })
    },
})
export const { setUser, setIsLoggedIn } = slice.actions;

export const logoutAction = (dispatch, state) => {
    dispatch(setUser({}))
    dispatch(setIsLoggedIn(false))
    localStorage.setItem('token', null)
}

export const loginAction = (dispatch, state, user) => {
    dispatch(setIsLoggedIn(true))
    dispatch(fetchUser())
}

export default slice.reducer
