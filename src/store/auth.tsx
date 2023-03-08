import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  user: {},
  isLogin: true,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    toggleMode(state) {
      state.isLogin = !state.isLogin;
      state.user = state.user;
    },
    login(state, payload) {
      state.isLogin = state.isLogin;
      state.user = payload;
    },
    logout(state) {
      state.isLogin = state.isLogin;
      state.user = {};
    },
    signup(state, payload) {
      state.isLogin = state.isLogin;
      state.user = payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
