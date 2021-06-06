import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  hasErrors: false
};

const { actions, reducer } = createSlice({
  name: "common",
  initialState,
  reducers: {
    //start loading
    initiateLoading: (state) => {
      state.loading = true;
    },
    //success Loading
    stopLoading: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
    //Failure Loading
    stopLoadingWithError: (state) => {
      state.loading = false;
      state.hasErrors = false;
    },
  }
});

export const {
  initiateLoading,
  stopLoading,
  stopLoadingWithError,
} = actions;

export default reducer;
