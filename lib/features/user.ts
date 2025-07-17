"use client";

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
const initialState = {
    user: {}
};
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserAction: (state, action: PayloadAction<{}>) => {
            state.user = action.payload;
        },
        userLoggedOut: () => initialState

    }
});
export const { setUserAction,userLoggedOut } = userSlice.actions;

export default userSlice.reducer;