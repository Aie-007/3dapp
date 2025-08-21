// firebaseConfig.js
import { initializeApp, getApps } from "firebase/app";
import { initializeAuth, getReactNativePersistence, getAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD1506iLc_r_Wxh0-4k8otPgQep66muick",
  authDomain: "avworld-21bd2.firebaseapp.com",
  projectId: "avworld-21bd2",
  storageBucket: "avworld-21bd2.firebasestorage.app",
  messagingSenderId: "951462258925",
  appId: "1:951462258925:web:88a6a0365ac2c74ba584e4",
  measurementId: "G-VKNC89TKF3",
};

// ✅ Initialize Firebase app only once
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// ✅ Initialize auth safely
let auth;
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} catch (err) {
  console.log("Auth already initialized, using existing auth");
  auth = getAuth(app);
}

export { auth, app };
