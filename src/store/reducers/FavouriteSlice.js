import { createSlice } from '@reduxjs/toolkit'

export const FavouriteSlice = createSlice({
  name: 'favourites',
  initialState: {
    favouriteList: [],
    numOfItemsInTheFavList: 0
  },
  reducers: {
    addNewMeetup: (state,action) => {
        const value = state.favouriteList.some(meetup => meetup.id === action.payload.id);
        if(!value){
          state.favouriteList.push(action.payload)
          state.numOfItemsInTheFavList += 1
        }
    },
    removeMeetup: (state,action) => {
        state.favouriteList.filter(meetup => meetup.id !== action.payload.id);
        state.numOfItemsInTheFavList -= 1
    },
    isItemFavouriteItem: (state,action) => {
      console.log('hello')
        state.favouriteList.some(meetup => meetup.id === action.payload.id);
    }
  },
}) 

export const { addNewMeetup, removeMeetup, isItemFavouriteItem} = FavouriteSlice.actions
export default FavouriteSlice.reducer