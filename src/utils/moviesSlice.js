import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingsMovies: null,
        popularMovies:null,
        topRatedMovies:null,
        upComingMovies:null,
        trailerVideo: null
    },
    reducers: {
        addNowPlayingsMovies: (state, action) => {
             state.nowPlayingsMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
             state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
             state.topRatedMovies = action.payload;
        },
        addUpComingMovies: (state, action) => {
             state.upComingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload
        }
    },
})

export const {addNowPlayingsMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies,  addUpComingMovies} = moviesSlice.actions;

export default moviesSlice.reducer;