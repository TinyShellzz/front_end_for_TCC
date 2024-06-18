import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ChapterState {
  value: number;
  menu: boolean;
}

const initialState: ChapterState = {
  value: 0,
  menu: true,
};

const ChapterSlice = createSlice({
  name: "chapter",
  initialState,
  reducers: {
    setChapter: (state, action: PayloadAction<number>) => {
      if (state.value == action.payload) {
        state.value = 0;
      } else {
        state.value = action.payload;
      }
    },
    toggleMenu: (state) => {
      state.menu = !state.menu;
    },
  },
});

export const { setChapter, toggleMenu } = ChapterSlice.actions;
export default ChapterSlice.reducer;
