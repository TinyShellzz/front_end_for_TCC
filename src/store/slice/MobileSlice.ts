import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface MobileState {
  mobile: number;
}

const initialState: MobileState = {
  mobile: 0,
};

const MobileSlice = createSlice({
  name: "mobile",
  initialState,
  reducers: {
    setMobile: (state, action: PayloadAction<number>) => {
      state.mobile = action.payload;
    },
  },
});

export const { setMobile } = MobileSlice.actions;
export default MobileSlice.reducer;
