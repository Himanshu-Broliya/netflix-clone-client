import {createSlice} from '@reduxjs/toolkit'

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchedMovie:null,
        movies:null,
    },
    reducers:{
        getSearchedMovie:(state,action)=>{
            const {name,movie} = action.payload;
            state.searchedMovie= name;
            state.movies=movie;
        }
    }
})

export const {getSearchedMovie} =  searchSlice.actions;

export  default searchSlice.reducer;