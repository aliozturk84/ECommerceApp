import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        status: true,
        user: {}
    },
    reducers: {
        login: (state) => {
            state.status = true
            state.user = {
                name: 'ibrahim',
                role: 'customer',
                email: 'ibr@ibr.com',
                pass: 'Password123!'
            }
        },
        register: (state, action) => {
            let { name, email, pass } = action.payload;
            state.status = true
            state.user = {
                name: name,
                role: 'customer',
                email: email,
                pass: pass
            }
        },
        logout: (state) => {
            console.log("user slice logouta gelindi");
            state.status = false
            state.user = {

            }
        }
    }
})

const userReducer = userSlice.reducer
export default userReducer