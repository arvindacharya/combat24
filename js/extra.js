let nav = document.querySelector(".navigation-wrap")
window.onscroll=()=>{
    if(document.documentElement.scrollTop>20)
        nav.classList.add("scroll-on")
    else nav.classList.remove("scroll-on")
}

let navBar= document.querySelectorAll(".nav-link")
let navCollapse = document.querySelector(".navbar-collapse.collapse")
navBar.forEach(function (x){
    x.addEventListener("click",function(){
        navCollapse.classList.remove("show")
    })
})
