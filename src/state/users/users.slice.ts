import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "../../interfaces/entities-interfaces/user.interface";
import { UsersState } from "../../interfaces/state-interfaces/user.state.interface";

import { fetchUsers } from "./users.actions";

const initialState: UsersState = {
  users: [],
  status: "idle",
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchUsers.fulfilled,
        (state, action: PayloadAction<IUser[]>) => {
          state.status = "succeeded";
          state.users = action.payload;
        }
      )
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default usersSlice.reducer;
