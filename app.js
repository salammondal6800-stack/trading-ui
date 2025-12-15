// Firebase config (আপনার দেওয়া)
const firebaseConfig = {
  apiKey: "AIzaSyAdZNnJOtXXVUbviwGl_-p5Vis0K9XK3bo",
  authDomain: "salam1-60a7e.firebaseapp.com",
  databaseURL: "https://salam1-60a7e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "salam1-60a7e",
  storageBucket: "salam1-60a7e.firebasestorage.app",
  messagingSenderId: "773909537078",
  appId: "1:773909537078:web:46d6f776a64683b23dd397"
};

// Init Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// ---- TEST DATA READ ----
const msgRef = db.ref("test_connection/msg");
msgRef.on("value", (snapshot) => {
  document.getElementById("testMsg").innerText =
    snapshot.val() || "No data";
});

// ---- GATE TEST ----
const gateRef = db.ref("users/admin/gate");
gateRef.on("value", (snapshot) => {
  const gate = snapshot.val();
  document.getElementById("gateStatus").innerText =
    gate === true ? "OPEN" : "LOCKED";
});
