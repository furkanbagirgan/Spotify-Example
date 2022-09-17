import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

//The new incoming data is assigned to the existing movie detail.
export const getListDetail = createAsyncThunk(
  'detail/getListDetail',
  async listId => {
    try {
      const response = await axios.get(
        `https://api.napster.com/v2.2/playlists/${listId}/tracks?apikey=MDJhOWMwYTgtYmI4Ni00OTcwLWIzNDItZDJkODJmOTU2Zjc4&limit=15`,
      );
      if (response.status === 200) {
        const musics = response.data.tracks;
        return musics;
      }
    } catch (error) {
      console.log(error.message);
    }
  },
);

//This is the slice where auth operations are made.
const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    listMusics: {},
    loading: false,
    error: false,
  },
  extraReducers: builder => {
    builder
      .addCase(getListDetail.pending, (state, action) => {
        //The reducer that will occur when the getListDetail function has failed.
        return {
          detailLoading: true,
          detailError: false,
        };
      })
      .addCase(getListDetail.fulfilled, (state, action) => {
        //The reducer that will occur when the getListDetail function has failed.
        return {
          listMusics: action.payload,
          detailLoading: false,
          detailError: false,
        };
      })
      .addCase(getListDetail.rejected, (state, action) => {
        //The reducer that will occur when the getListDetail function has failed.
        return {
          detailError: true,
          detailLoading: false,
        };
      });
  },
});

export default detailSlice.reducer;
