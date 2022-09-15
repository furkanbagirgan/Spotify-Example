import {configureStore} from '@reduxjs/toolkit';

import AuthReducer from './authSlice';
import ThemeReducer from './themeSlice';
import MusicReducer from './musicSlice';
import SearchReducer from './searchSlice';
import DetailReducer from './detailSlice';

//A store is created by pulling reducers from all slices.
const store = configureStore({
  reducer: {
    auth: AuthReducer,
    theme: ThemeReducer,
    music: MusicReducer,
    search: SearchReducer,
    detail: DetailReducer,
  },
});

export default store;
