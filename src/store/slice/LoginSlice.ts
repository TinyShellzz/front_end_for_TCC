import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface LoginState {
  login: boolean;
  permission: number;
}

const initialState: LoginState = {
  login: false,
  permission: 0,
};

const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state) => {
      // or increment: (state, action)
      state.login = true;
    },
    setLogout: (state) => {
      // or increment: (state, action)
      state.login = false;
    },
    setPermission: (state, action: PayloadAction<{ value: number }>) => {
      state.permission = action.payload.value;
    },
  },
});

export const { setLogin, setLogout, setPermission } = LoginSlice.actions;
export default LoginSlice.reducer;
