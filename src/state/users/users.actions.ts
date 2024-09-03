import { createAsyncThunk } from "@reduxjs/toolkit";

import { IUser } from "../../interfaces/entities-interfaces/user.interface";

export const fetchUsers = createAsyncThunk<IUser[]>(
  "users/fetchUsers",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const data = await response.json();
    return data;
  }
);
