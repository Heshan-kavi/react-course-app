import { createSlice } from '@reduxjs/toolkit'

export const FavouriteSlice = createSlice({
  name: 'favourites',
  initialState: {
    favouriteList: [],
    numOfItemsInTheFavList: 0
  },
  reducers: {
    addNewMeetup: (state,action) => {
      state.favouriteList.push(action.payload)
      state.numOfItemsInTheFavList += 1
    },
    removeMeetup: (state,action) => {
      state.favouriteList.push(action.payload)
      state.numOfItemsInTheFavList -= 1
    },
  },
})

export const { addNewMeetup, removeMeetup} = FavouriteSlice.actions
export default FavouriteSlice.reducer