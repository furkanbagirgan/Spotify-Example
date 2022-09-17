import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

//The new incoming data is assigned to the existing searchedMovies.
export const getSearchedMusics = createAsyncThunk(
  'search/getSearchedMusics',
  async searchedText => {
    try {
      const response = await axios.get(
        `https://api.napster.com/v2.2/search/verbose?apikey=MDJhOWMwYTgtYmI4Ni00OTcwLWIzNDItZDJkODJmOTU2Zjc4&query=${searchedText}&type=track&per_type_limit=15`,
      );
      if (response.status === 200) {
        const musics = response.data.search.data.tracks;
        return musics;
      }
    } catch (error) {
      console.log(error.message);
    }
  },
);

//This is the slice where auth operations are made.
const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchedMusics: [],
    loading: false,
    error: false,
  },
  extraReducers: builder => {
    builder
      .addCase(getSearchedMusics.pending, (state, action) => {
        //The reducer that will be generated while the getSearchedMusics function is running.
        return {
          loading: true,
          error: false,
        };
      })
      .addCase(getSearchedMusics.fulfilled, (state, action) => {
        //The reducer that will occur when the getSearchedMusics function is positive.
        return {
          searchedMusics: action.payload,
          loading: false,
          error: false,
        };
      })
      .addCase(getSearchedMusics.rejected, (state, action) => {
        //The reducer that will occur when the getSearchedMusics function has failed.
        return {
          loading: false,
          error: true,
        };
      });
  },
});

export default searchSlice.reducer;
