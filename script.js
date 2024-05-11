document.getElementById("btn-sign-in-1").addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("Button was clicked...")
    window.location.href = "signin.html";
});
document.getElementById("btn-sign-in-2").addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("Button was clicked...")
    window.location.href = "signin.html";
});
document.getElementById("account").addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("Button was clicked...")
    window.location.href = "signin.html";
});

document.querySelector(".mini-box").addEventListener("click", function (e) {
    console.log(e.target.tagName + " is clicked!")
    const target = e.target
    if (target.matches("li")) {
        if (target.nextElementSibling.classList.contains("hidden-content")) {
            target.nextElementSibling.classList.remove("hidden-content")
            target.lastElementChild.style.transform = 'rotate(45deg)'
        } else {
            target.lastElementChild.style.transform = 'rotate(0deg)'
            target.nextElementSibling.classList.add("hidden-content")

        }
    }
    else if (target.matches("p") || target.matches("img")) {
        if (target.parentNode.nextElementSibling.classList.contains("hidden-content")) {
            target.parentNode.nextElementSibling.classList.remove("hidden-content")
            target.parentNode.lastElementChild.style.transform = 'rotate(45deg)'
        } else {
            target.parentNode.nextElementSibling.classList.add("hidden-content")
            target.parentNode.lastElementChild.style.transform = 'rotate(0deg)'
        }
    }
})

const validateEmail = (email) => {
    var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
}

const emailBtn = document.getElementById('verify-email');
let email = null;
emailBtn.addEventListener("click", (event) => {
    event.preventDefault();
    email = document.getElementById("email").value;
    if (validateEmail(email)) {
        console.log(`Your email is ${email}`)
        document.querySelector('#invalid-email').style.display='none';
        window.location.href = "verification.html?email=" + encodeURIComponent(email);
    }
    else {
        console.log("Email is invalid")
        document.querySelector('#invalid-email').style.display='flex';
    }

})


