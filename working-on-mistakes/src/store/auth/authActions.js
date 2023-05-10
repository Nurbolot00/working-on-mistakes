import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginRequest } from "../../api/authService";
import { addItemToStorage } from "../../utils/helpers/storageHelpers";
import { JWT_TOKEN_KEY, USER_KEY } from "../../utils/constants/general";

export const asyncLogin = createAsyncThunk(
  "auth/login",
  async (payload, thunkAoi) => {
    try {
      const { data } = loginRequest(payload);
      addItemToStorage(data.token, JWT_TOKEN_KEY)
      addItemToStorage(data.role, USER_KEY)
      payload.navigate('/admin/users')
      return data;
    } catch (error) {
      thunkAoi.rejectWithValue(error);
    }
  }
);
