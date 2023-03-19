import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  user: {},
  isAuth: false,
  isLogin: true,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    toggleMode(state) {
      state.isLogin = !state.isLogin;
      state.user = state.user;
      state.isAuth = state.isAuth;
    },
    login(state, payload) {
      state.isLogin = state.isLogin;
      state.user = payload.payload;
      state.isAuth = true;
    },
    logout(state) {
      state.isLogin = state.isLogin;
      state.user = {};
      state.isAuth = false;
    },
    signup(state, payload) {
      state.isLogin = state.isLogin;
      state.user = payload.payload;
      state.isAuth = true;
    },
    editUser(state, payload) {
      state.isLogin = state.isLogin;
      state.user = payload.payload;
      state.isAuth = true;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
