import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Theme = "light" | "dark";

interface UIState {
  theme: Theme;
}

const savedTheme = localStorage.getItem("theme") as Theme | null;
const initialState: UIState = {
  theme: savedTheme ? savedTheme : "dark",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload);
    },
    toggleTheme: (state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      state.theme = newTheme;
      localStorage.setItem("theme", newTheme);
    },
  },
});

export const { setTheme, toggleTheme } = uiSlice.actions;
export default uiSlice.reducer;
