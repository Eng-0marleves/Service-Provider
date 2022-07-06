let menue = document.querySelector("#menue");
let navbar = document.querySelector(".navbar");
menue.addEventListener("click", ()=> { 
    menue.classList.toggle("fa-bars-staggered");
    navbar.classList.toggle("nav-toggle")
})
window.onscroll = () => { 
    menue.classList.remove("fa-bars-staggered");
    navbar.classList.remove("nav-toggle")
}
window.addEventListener("scroll",() => {
    const header=document.querySelector(".header");
    header.classList.toggle("sticky",window.scrollY > 0);
});
