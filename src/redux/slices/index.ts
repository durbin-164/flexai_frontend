import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import uiModeReducer from './uiModeSlice';

const rootReducer = combineReducers({
  user: userReducer,
  uiMode: uiModeReducer,
});

export default rootReducer;
