import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from './reducers/FavouriteSlice';

export default configureStore({
    reducer: {
        favourite: favouriteReducer,
    }
})