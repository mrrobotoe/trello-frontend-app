import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: false,
};
export const themesSlice = createSlice({
  name: 'themes',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleTheme } = themesSlice.actions;

export default themesSlice.reducer;
