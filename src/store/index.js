import { configureStore } from '@reduxjs/toolkit'
import modalLandingReducer from './landing/modalLandingSlice'
export default configureStore({
  reducer: {
      modalLanding: modalLandingReducer
  },
})