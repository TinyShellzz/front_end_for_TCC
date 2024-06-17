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
    mobile: (state: any) => {
      // or increment: (state, action)
      state = true;
    },
    not_mobile: (state: any) => {
      // or increment: (state, action)
      state = false;
    },
  },
});

export const { mobile, not_mobile } = MobileSlice.actions;
export default MobileSlice.reducer;
