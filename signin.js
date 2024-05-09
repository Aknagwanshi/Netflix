import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyC5G3bPfGk9zTDD-DAUoGhvcMMy7llH1KQ",
    authDomain: "netflix-50336.firebaseapp.com",
    projectId: "netflix-50336",
    storageBucket: "netflix-50336.appspot.com",
    messagingSenderId: "465725742307",
    appId: "1:465725742307:web:c30886bf0db651e194b9d6",
    measurementId: "G-69932FVYHP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const submit = document.getElementById('submit');

submit.addEventListener("click", (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Signing In...")
            window.location.href = "main.html"
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
        });
})
