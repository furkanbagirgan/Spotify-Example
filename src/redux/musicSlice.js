import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

//Get the new musics.
export const getMusicsAndLists = createAsyncThunk(
  'music/getMusicsAndLists',
  async () => {
    let result={musics:[],lists:[]};
    try {
      const resMusics = await axios.get(
        'https://api.napster.com/v2.2/tracks/top?apikey=MDJhOWMwYTgtYmI4Ni00OTcwLWIzNDItZDJkODJmOTU2Zjc4&limit=10',
      );
      if (resMusics.status === 200) {
        result= {...result,musics:[...resMusics.data.tracks]};
        const resLists = await axios.get(
          'https://api.napster.com/v2.2/playlists/featured?apikey=MDJhOWMwYTgtYmI4Ni00OTcwLWIzNDItZDJkODJmOTU2Zjc4&limit=4',
        );
        if (resLists.status === 200) {
          result= {...result,lists:[...resLists.data.playlists]};
          return result;
        }
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
    newMusics: [],
    loading: false,
    error: false,
    newLists: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMusicsAndLists.pending,(state, action) => {
        //The reducer that will be generated while the getMusicsAndLists function is running.
        return {
          loading: true,
          error: false,
        };
      })
      .addCase(getMusicsAndLists.fulfilled,(state, action) => {
        //The reducer that will be generated while the getMusicsAndLists function is running.
        return {
          newMusics: action.payload.musics,
          newLists: action.payload.lists,
          loading: false,
          error: false,
        };
      })
      .addCase(getMusicsAndLists.rejected,(state, action) => {
        //The reducer that will be generated while the getMusicsAndLists function is running.
        return {
          loading: false,
          error: true,
        };
      });
  },
});

export default musicSlice.reducer;
