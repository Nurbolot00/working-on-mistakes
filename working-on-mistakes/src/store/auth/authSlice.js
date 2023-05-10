import { createSlice } from "@reduxjs/toolkit";
import { asyncLogin } from "./authActions";

const initialState = {
  id: 0,
  accessToken: "",
  role: "GUEST",
  isAuthorized: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(asyncLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(asyncLogin.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(asyncLogin.fulfilled, (state, { payload }) => {
        state.accessToken = payload.token;
        state.role = payload.role;
        state.isLoading = false;
      });
  },
});

export const authActions = authSlice.actions;

export default authSlice;
