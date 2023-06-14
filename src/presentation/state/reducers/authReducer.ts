import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { checkPassword } from '../types/passwordType';

// Define state interfaces
interface AuthState {
    email: string
    loginError: string | null
    password: string,
    passwordErrors: string[] | null
    passwordRepeat: string,
    passwordRepeatError: string | null
    rememberme: boolean
    component: 'login' | 'register',
    error: string | null
}

// Define initial state
const initialState: AuthState = {
    email: '',
    password: '',
    passwordRepeat: '',
    loginError: null,
    passwordErrors: null,
    passwordRepeatError: null,
    rememberme: false,
    component: 'login',
    error: null,

};

// Create auth slice
const authSlicer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        changeComponent: (state, action: PayloadAction<'login' | 'register'>) => {
            state.component = action.payload;
        },
        changeRememberme: (state, action: PayloadAction<boolean>) => {
            state.rememberme = action.payload;
        },
        changeEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        changePassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
            const errors = checkPassword(action.payload)
            state.passwordErrors = errors;
        },
        changePasswordRepeat: (state, action: PayloadAction<string>) => {
            state.passwordRepeat = action.payload;
            if (state.passwordRepeat !== state.password)  state.passwordRepeatError = 'Passwords do not match'
            else state.passwordRepeatError = null;
        },
    }
});

export const { changeComponent, changeRememberme, changeEmail, changePassword, changePasswordRepeat } = authSlicer.actions;
export default authSlicer.reducer