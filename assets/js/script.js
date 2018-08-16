// adjust color navbar on scrolling

var navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function() {
    if(window.scrollY < 100) {
        navbar.style.backgroundColor = "transparent";
    } else {
        navbar.style.backgroundColor = "white";
    }
});