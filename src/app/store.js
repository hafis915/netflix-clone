import { configureStore } from "@reduxjs/toolkit"
import favReducer from "../features/favSlice"
export default configureStore({
  reducer: {
    favorite: favReducer
  }
})