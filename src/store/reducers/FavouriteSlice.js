import { createSlice } from '@reduxjs/toolkit'

export const FavouriteSlice = createSlice({
  name: 'favourites',
  initialState: {
    favouriteList: 0,
  },
  reducers: {
    addNewMeetupToTheList: (state) => {
      state.favouriteList += 1
    },
    removeMeetupToTheList: (state) => {
      state.favouriteList -= 1
    },
  },
})

export const { addNewMeetupToTheList, removeMeetupToTheList } = FavouriteSlice.actions
export default FavouriteSlice.reducer