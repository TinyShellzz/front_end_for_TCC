import { createSlice } from "@reduxjs/toolkit";

interface MobileSlice {
  mobile: boolean;
}

const initialState: MobileSlice = {
  mobile: false,
};

const MobileSlice = createSlice({
  name: "mobile",
  initialState,
  reducers: {
    mobile: (state) => {
      // or increment: (state, action)
      state.mobile = true;
    },
    not_mobile: (state) => {
      // or increment: (state, action)
      state.mobile = false;
    },
  },
});

export const { mobile, not_mobile } = MobileSlice.actions;
export default MobileSlice.reducer;
