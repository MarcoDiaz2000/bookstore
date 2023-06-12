import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: 'Under construction',
  reducers: {
    checkStatus: (state) => state,
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
