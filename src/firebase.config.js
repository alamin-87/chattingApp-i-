// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKqUEiuQN1pjNZPZC2dJvGjHUZWRT4_i0",
  authDomain: "chattingapp-579a3.firebaseapp.com",
  projectId: "chattingapp-579a3",
  storageBucket: "chattingapp-579a3.firebasestorage.app",
  messagingSenderId: "835333250393",
  appId: "1:835333250393:web:997c5320ebbeda848ac048",
  measurementId: "G-WN6Q76RPW0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app