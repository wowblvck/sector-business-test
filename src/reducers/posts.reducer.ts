import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
};

const postsSlice = createSlice({
  initialState,
  name: 'posts',
  reducers: {
    setSearchValue(state, { payload }: PayloadAction<string>) {
      state.searchValue = payload;
    },
  },
});

export const { setSearchValue } = postsSlice.actions;
export default postsSlice.reducer;
