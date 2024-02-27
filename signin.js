document.getElementById("sign-up-now-btn").addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("Button was clicked...")
    window.location.href = "index.html";
});
