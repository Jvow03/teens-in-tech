
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  db.ref("signups/").push({ name, email }).then(() => {
    alert("Signed up successfully!");
    e.target.reset();
  });
});

document.getElementById("commentForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("commentName").value;
  const comment = document.getElementById("commentText").value;
  db.ref("comments/").push({ name, comment }).then(() => {
    alert("Comment submitted!");
    e.target.reset();
  });
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("contactName").value;
  const email = document.getElementById("contactEmail").value;
  const message = document.getElementById("contactMessage").value;
  db.ref("messages/").push({ name, email, message }).then(() => {
    alert("Message sent!");
    e.target.reset();
  });
});
