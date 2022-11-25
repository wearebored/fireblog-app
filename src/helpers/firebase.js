import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_DOMAIN,
  databaseURL: process.env.REACT_APP_URL,
  projectId: process.env.REACT_APP_PROJECT,
  storageBucket: process.env.REACT_APP_STORAGE,
  messagingSenderId: process.env.REACT_APP_MESSAGING,
  appId: process.env.REACT_APP_APPID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
