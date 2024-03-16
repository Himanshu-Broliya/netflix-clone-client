import { createSlice } from '@reduxjs/toolkit'

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        trendingMovies: null,
        trendingAll: null,
        trendingPerson: null,
        trendingTv: null,
        tvAiringToday: null,
        tvOnAir: null,
        tvPopular: null,
        tvTopRated: null,
        personPopular: null,
        searchBtn:false,
        id:null,
        newId:null,
        title:null,
        des:null,
        latestTitle:null,
        latestDes:null,
        indicator:false,
    
    },
    reducers: {
        getNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        getPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        getTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        getUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        getTrendingAll: (state, action) => {
            state.trendingAll = action.payload;
        },
        getTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload;
        },
        getTrendingPerson: (state, action) => {
            state.trendingPerson = action.payload;
        },
        getTrendingTv: (state, action) => {
            state.trendingTv = action.payload;
        },
        getTvAiringToday: (state, action) => {
            state.tvAiringToday = action.payload;
        },
        getTvOnAir: (state, action) => {
            state.tvOnAir = action.payload;
        },
        getTvPopular: (state, action) => {
            state.tvPopular = action.payload;
        },
        getTvTopRated: (state, action) => {
            state.tvTopRated = action.payload;
        },
        getPersonPopular: (state, action) => {
            state.personPopular = action.payload;
        },
        setSearchBtn: (state, action) => {
            state.searchBtn = action.payload;
        },
        setLatestTitle: (state, action) => {
            state.latestTitle = action.payload;
        },
        setLatestDes: (state, action) => {
            state.latestDes = action.payload;
        },
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        setDes: (state, action) => {
            state.des = action.payload;
        },
        setNewId: (state, action) => {
            state.newId = action.payload;
        },
        setId: (state, action) => {
            state.id = action.payload;
        },
        setIndicator:(state,action) =>{
            state.indicator = action.payload;
        }
    }
})

export const { getNowPlayingMovies,
    getPopularMovies,
    getTopRatedMovies,
    getUpcomingMovies,
    getPersonPopular,
    getTrendingAll,
    getTrendingMovies,
    getTrendingPerson,
    getTrendingTv,
    getTvAiringToday,
    getTvOnAir,
    getTvTopRated,
    getTvPopular,
    setSearchBtn,
    setNewId,
    setDes,
    setTitle,
    setLatestTitle,
    setLatestDes,
    setId,
    setIndicator } = movieSlice.actions;

export default movieSlice.reducer;