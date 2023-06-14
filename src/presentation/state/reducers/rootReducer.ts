import { Action, ThunkAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlicer from "./userReducer";
import authReducer from "./authReducer";

// Define root reducer
const rootReducer = combineReducers({
    auth: authReducer,
    user: userSlicer
    // Add other reducers as needed
});

// Define root state
export type RootState = ReturnType<typeof rootReducer>;

// Define thunk type
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
        
    }),
});
export default store;