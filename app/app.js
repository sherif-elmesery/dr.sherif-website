//define global variables
const navIcon = document.querySelector('#nav-bar');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll(".nav-links a")

//nav icon
navIcon.addEventListener("click",()=>{
    navLinks.setAttribute("class","active")
    console.log("clicked")
})
// navIcon.addEventListener("click",()=>{
//     navLinks.style.display = "none"
// })
links.forEach((a)=>{
    a.addEventListener("click",()=>{
        navLinks.style.display = "none"
    })
})