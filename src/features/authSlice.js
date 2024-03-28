import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    // value: null,
    isAuthenticated: false,
    // user: null,
  }

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            // state.value = action.payload;
            state.isAuthenticated = true;
            // state.user = action.payload;
        },
        logout: (state) => {
            // state.value = null;
            state.isAuthenticated = false;
            // state.user = null;
        }
    },
});

export const { login, logout } = authSlice.actions;

// export const selectUser = (state) => state.user.value;
export const selectAuth = (state) => state.auth;


export default authSlice.reducer;