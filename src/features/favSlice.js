import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favorite: []
}

const FavSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addTofavorite: (state, action) => {
      console.log(action, "<<< Action")
      console.log(state, "<<<< State")
      state.favorite.push(action.payload)
    }
  }
});

export const {
  addTofavorite
} = FavSlice.actions

export const selectFavorite = state => state.favorite.favorite
export default FavSlice.reducer
