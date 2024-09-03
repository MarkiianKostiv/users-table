import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/users.slice";
import uiReducer from "./ui/ui-slice";
import filterReducer from "./filters/filter.slice";

export const store = configureStore({
  reducer: { users: usersReducer, ui: uiReducer, filters: filterReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
