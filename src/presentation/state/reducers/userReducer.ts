import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';

// Define state interfaces
interface UserState {
    user: User | null;
    isLoading: boolean;
    error: string | null;
}

// Define initial state
const initialState: UserState = {
    user: null,
    isLoading: false,
    error: null,
};

// Create user slice
const userSlicer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload;
            state.isLoading = false;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        }
    },
});

export const { setUser, setError, setLoading } = userSlicer.actions;
export default userSlicer.reducer