// document.querySelector("body").addEventListener("click",(e)=>{
//     console.log("OOps body is also clicked by you!")
// })

let changeable=document.querySelector(".change-able")
document.querySelector(".number-option").addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("Radio invoked")
    changeable.firstElementChild.innerText="We will text you a verification code to reset your password. Message and data rates may apply."
   
})
