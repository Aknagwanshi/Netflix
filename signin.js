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
    const checkBox = document.querySelector('#rem-me');
    let invalid_reason = document.querySelector('#invalid-reason')

    console.log(checkBox.checked)
    if (checkBox.checked) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                invalid_reason.innerText = ''
                const user = userCredential.user;
                window.location.href = "main.html"
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                let errorMessage = error.message;
                switch (errorCode) {
                    case 'auth/invalid-email':
                        errorMessage = 'Whoops! It seems like that you enter wrong email.';
                        break;
                    case 'auth/missing-password':
                        errorMessage = 'The password is Required. Please try again.';
                        break;
                    case 'auth/invalid-credential':
                        errorMessage = 'User not found or may enter wrong password. Please try again.';
                        break;
                    default:
                        // Handle other errors
                        errorMessage = 'An error occurred. Please try again later.';
                }
                invalid_reason.innerText = errorMessage;
                // alert(errorMessage)
                // ..
            });
    }
    else {
        alert('Please check the checkbox')
    }


})
