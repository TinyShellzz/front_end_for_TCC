import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface LoginState {
  login: boolean;
  permission: number;
  email: string;
  phone: string;
}

const initialState: LoginState = {
  login: false,
  permission: 0,
  email: "",
  phone: "",
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
    setPermission: (state, action: PayloadAction<number>) => {
      state.permission = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
  },
});

export const { setLogin, setLogout, setPermission, setEmail, setPhone } =
  LoginSlice.actions;
export default LoginSlice.reducer;
