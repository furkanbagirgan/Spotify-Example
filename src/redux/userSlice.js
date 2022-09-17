import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

//This is the slice where music operations are made.
const userSlice = createSlice({
  name: 'user',
  initialState: {
    likedMusics: [],
  },
  reducers: {
    //
    toggleMusicLiked: (state,action)=>{
      const result=state.likedMusics.findIndex((music)=>action.payload.id===music.id);
      let newLikedMusics=[...state.likedMusics];
      if(result !== -1){
        newLikedMusics=newLikedMusics.filter((music)=>music.id===action.payload.id);
      }
      else{
        newLikedMusics.push({...action.payload});
      }
      return{
        likedMusics: [...newLikedMusics]
      }
    },
  },
});

export const {toggleMusicLiked}  = userSlice.actions;
export default userSlice.reducer;
