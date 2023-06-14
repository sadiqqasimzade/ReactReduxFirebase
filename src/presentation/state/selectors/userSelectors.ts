/* eslint-disable react-hooks/rules-of-hooks */
import { RootState } from "../reducers/rootReducer";

export const getAuthUser = (state: RootState) => state.user.user;
export const getAuthLoading = (state: RootState) => state.user.isLoading;
export const getAuthError = (state: RootState) => state.user.error;
