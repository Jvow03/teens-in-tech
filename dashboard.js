import { db } from './firebase-config.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

async function loadMessages() {
  const querySnapshot = await getDocs(collection(db, "messages"));
  const messagesDiv = document.getElementById("messages");
  querySnapshot.forEach((doc) => {
    const msg = doc.data();
    const p = document.createElement("p");
    p.textContent = `${msg.name}: ${msg.message}`;
    messagesDiv.appendChild(p);
  });
}
loadMessages();