import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {
    getAuth,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA1WpwAB41hUJa-SsotcAIoy1NB5gkL-B8",
    authDomain: "chat-react-ed3fc.firebaseapp.com",
    projectId: "chat-react-ed3fc",
    storageBucket: "chat-react-ed3fc.appspot.com",
    messagingSenderId: "977053715023",
    appId: "1:977053715023:web:cf304ecfe2e222b81f783a",
    measurementId: "G-DGZQN77ZNS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const firestore = getFirestore(app) ;
const analytics = getAnalytics(app);
