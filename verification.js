import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

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


const passwordBtn = document.getElementById('verify-password');
const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get('email');
console.log(email)
document.querySelector('#dynamic-email').innerText = email;
passwordBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let password = document.querySelector('#password').value;
    let invalid_reason = document.querySelector('#invalid-reason')
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            invalid_reason.innerText = ''
            window.location.href = "signin.html"
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            let errorMessage = error.message;
            switch (errorCode) {
                case 'auth/email-already-in-use':
                    errorMessage = 'Whoops! It seems like that email is already being used.';
                    break;
                case 'auth/wrong-password':
                    errorMessage = 'The password is incorrect. Please try again.';
                    break;
                case 'auth/user-not-found':
                    errorMessage = 'User not found. Please check your email address or sign up.';
                    break;
                case 'auth/weak-password':
                    errorMessage = 'The password is too weak. Please choose a stronger password.';
                    break;
                default:
                    // Handle other errors
                    errorMessage = 'An error occurred. Please try again later.';
            }
            invalid_reason.innerText = errorMessage;
            // ..
        });
})
