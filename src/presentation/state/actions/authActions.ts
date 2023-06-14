import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from 'src/presentation/services/firebase';
import { AppThunk } from '../reducers/rootReducer';
import { FirebaseError } from 'firebase/app';
import { setError, setLoading, setUser } from '../reducers/userReducer';

export const signInPassword = (email: string, password: string): AppThunk => async (dispatch) => {
    dispatch(setLoading(true))
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        if (result.user) {
            dispatch(setUser(result.user))
        }
        else {
            dispatch(setError('Invalid email or password'))
        }
    } catch (error) {
        const err = error as FirebaseError
        const message = err.message
        dispatch(setError(message));
    }
};


export const signInPopup = (): AppThunk => async (dispatch) => {
    dispatch(setLoading(true))
    const googleProvider = new GoogleAuthProvider()
    try {
        const result = await signInWithPopup(auth, googleProvider);
        if (result.user) {
            dispatch(setUser(result.user))
        }
    } catch (error) {
        const err = error as FirebaseError
        const message = err.message
        dispatch(setError(message));
    }
};


export const signOut = (): AppThunk => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        await auth.signOut();
        dispatch(setUser(null));
    } catch (error) {
        const err = error as FirebaseError
        const message = err.message
        dispatch(setError(message));
    }
};

export const signUp = (email: string, password: string): AppThunk => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const result = await createUserWithEmailAndPassword(auth, email, password)
        dispatch(setUser(result.user))
    } catch (error) {
        const err = error as FirebaseError
        const message = err.message
        dispatch(setError(message));
    }
}