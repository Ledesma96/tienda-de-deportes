import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    role: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.email = action.payload[0].email,
            state.role = action.payload[0].role
        },
        logout: (state) => {
            state.email = null,
            state.role = null
        }
    }
})

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;