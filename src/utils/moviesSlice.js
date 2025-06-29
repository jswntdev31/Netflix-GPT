import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingsMovies: null,
        trailerVideo: null
    },
    reducers: {
        addNowPlayingsMovies: (state, action) => {
             state.nowPlayingsMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload
        }
    },
})

export const {addNowPlayingsMovies, addTrailerVideo} = moviesSlice.actions;

export default moviesSlice.reducer;