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






