import { configureStore } from '@reduxjs/toolkit'
import modalLandingReducer from './landing/modalLandingSlice'
import authReducer from './auth/authSlice'

export default configureStore({
  reducer: {
      modalLanding: modalLandingReducer,
      auth: authReducer,
  },
})