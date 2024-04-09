import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userName: "",
    firstName: "",
    lastName: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserName: (state, action) => {
            state.userName = action.payload;
        }, 
        setFirstName: (state, action) => {
            state.firstName = action.payload;
        }, 
        setLastName: (state, action) => {
            state.lastName = action.payload;
        }, 
    },
});

export const { setUserName, setFirstName, setLastName } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;