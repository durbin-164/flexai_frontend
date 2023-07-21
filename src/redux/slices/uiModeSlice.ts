import { createSlice } from '@reduxjs/toolkit';
import { ThemeModeEnum } from '../../constant/enums';

type UiMode = string; // Use string instead of 'light' | 'dark'

const initialState: UiMode = ThemeModeEnum.Light;

const uiModeSlice = createSlice({
  name: 'uiMode',
  initialState,
  reducers: {
    toggleUiMode: (state) => {
      return state === ThemeModeEnum.Light ? ThemeModeEnum.Dark : ThemeModeEnum.Light;
    },
  },
});

export const { toggleUiMode } = uiModeSlice.actions;
export default uiModeSlice.reducer;
