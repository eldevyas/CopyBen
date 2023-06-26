// store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { InitialState } from '../initialState';

const initialState = InitialState.Auth;

const AuthSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        Login(state, action) {
            state.isAuthenticated = true;
            state.User = action.payload;
        },
        Logout(state) {
            state.isAuthenticated = false;
            state.User = null;
        },
    },
});

export const { Login, Logout } = AuthSlice.actions;
export default AuthSlice.reducer;
