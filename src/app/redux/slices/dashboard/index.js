import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: null
};

const {actions, reducer} = createSlice({
    name: "dashboardData",
    initialState,
    reducers: {
        getDashboardDataSuccess: (state, {payload}) => {
            state.data = payload;
        },
        showModelTimeline: (state, {payload}) => {
            state.showModelTimeLine = payload;
        }
    }
});

export const {
    getDashboardDataSuccess,
    showModelTimeline
} = actions;

export default reducer;
