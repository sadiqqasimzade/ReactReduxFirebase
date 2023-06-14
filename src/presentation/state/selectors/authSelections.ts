import { RootState } from "../reducers/rootReducer";

export const getAuthPassword = (state: RootState) => state.auth.password;
export const getAuthPasswordRepeat = (state: RootState) => state.auth.passwordRepeat;
export const getAuthEmail = (state: RootState) => state.auth.email;
export const getAuthComponent = (state: RootState) => state.auth.component;
export const getAuthRememberme = (state: RootState) => state.auth.rememberme;


export const getAuthPasswordError = (state: RootState) => state.auth.passwordErrors;
export const getAuthPasswordRepeatError = (state: RootState) => state.auth.passwordRepeatError;
export const getAuthEmailError = (state: RootState) => state.auth.loginError;