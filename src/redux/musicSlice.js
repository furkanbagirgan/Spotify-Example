import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

//The new incoming data is assigned to the existing filteredMusics.
export const getFilteredMusic = createAsyncThunk(
  'music/getFilteredMusic',
  async selectedFilter => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${selectedFilter}?api_key=8cafe31173adc15ddeaa1729dd482fc3&language=en-US`,
      );
      if (response.status === 200) {
        const musics =
          selectedFilter !== 'latest' ? response.data.results : [response.data];
        return musics;
      }
    } catch (error) {
      console.log(error.message);
    }
  },
);

//This is the slice where music operations are made.
const musicSlice = createSlice({
  name: 'music',
  initialState: {
    filteredMusics: [],
    loading: false,
    error: false,
  },
  extraReducers: builder => {
    builder
      .addCase(getFilteredMusic.pending, (state, action) => {
        //The reducer that will be generated while the getFilteredMusic function is running.
        return {
          loading: true,
          error: false,
        };
      })
      .addCase(getFilteredMusic.fulfilled, (state, action) => {
        //The reducer that will occur when the getFilteredMusic function is positive.
        return {
          filteredMusics: action.payload,
          loading: false,
          error: false,
        };
      })
      .addCase(getFilteredMusic.rejected, (state, action) => {
        //The reducer that will occur when the getFilteredMusic function has failed.
        return {
          loading: false,
          error: true,
        };
      });
  },
});

export default musicSlice.reducer;
