import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    userType: null
};

const {actions, reducer} = createSlice({
    name: "loginData",
    initialState,
    reducers: {
        loginSuccess: (state, {payload}) => {
            state.userType = payload;
        }
    }
});

export const {
    loginSuccess,
} = actions;

export default reducer;
