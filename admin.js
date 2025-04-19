import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

window.login = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    document.getElementById("login-status").innerText = "Login successful!";
    window.location.href = "dashboard.html";
  } catch (error) {
    document.getElementById("login-status").innerText = error.message;
  }
}