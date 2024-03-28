import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
    userName: "",
  }

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        user: (state, action) => {
            state.user = action.payload;
        },
        setUserName: (state, action) => {
            state.userName = action.payload;
        }
    },
});

export const { user, setUserName } = userSlice.actions;

export const selectUser = (state) => state.user;


export default userSlice.reducer;