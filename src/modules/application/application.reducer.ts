import { createSlice } from "@reduxjs/toolkit";
import ApplicationReducerModel from "../../infrastructure/models/application/applicationReducerModel";

const initialState: ApplicationReducerModel = {
  loading: false,
};

const { reducer, actions } = createSlice({
  name: "application",
  initialState: initialState,
  reducers: {
    toggleLoading: (state) => {
      state.loading = !state.loading;
    },
  },
});

export default reducer;
export const { toggleLoading } = actions;
