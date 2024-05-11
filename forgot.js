let email = document.querySelector("#email")
let number = document.querySelector("#number")
let changeable_1 = document.querySelector(".change-able")
let changeable_2 = document.querySelector(".change-able2")

email.addEventListener("change", () => {
    changeable_1.style.display = 'flex';
    changeable_2.style.display = 'none';
});

number.addEventListener("change", () => {
    changeable_1.style.display = 'none';
    changeable_2.style.display = 'flex';
});

let india_icon = document.querySelector(".image-stack").firstElementChild
let america_icon = document.querySelector(".image-stack").lastElementChild
