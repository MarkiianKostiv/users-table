import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterState } from "../../interfaces/state-interfaces/filter.state.interface";

const initialState: FilterState = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<{ key: keyof FilterState; value: string }>
    ) => {
      state[action.payload.key] = action.payload.value;
    },
    clearFilters: (state) => {
      state.name = "";
      state.username = "";
      state.email = "";
      state.phone = "";
    },
  },
});

export const { setFilter, clearFilters } = filterSlice.actions;
export default filterSlice.reducer;
