
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCzxobtCQSe8DM1RYyNyR2pBxseqw0khz8",
  authDomain: "teens-in-tech.firebaseapp.com",
  projectId: "teens-in-tech",
  storageBucket: "teens-in-tech.appspot.com",
  messagingSenderId: "984870510539",
  appId: "1:984870510539:web:708525d91cc67d11b7e04e",
  measurementId: "G-74QPWHJXQ4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
