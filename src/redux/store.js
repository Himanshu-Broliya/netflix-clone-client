import {configureStore} from '@reduxjs/toolkit'
import movieReducer from './movieSlice';
import searchSlice from './searchSlice';


const store = configureStore({
    reducer:{
        movie:movieReducer,
        search:searchSlice
    }
});

export default store;