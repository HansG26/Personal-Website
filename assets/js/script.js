var navbar = document.querySelector(".navbar");

// adjust background-color navbar on scrolling

window.addEventListener("scroll", function() {
    if (window.scrollY < 100 && document.body.clientWidth >= 992) {
        navbar.style.backgroundColor = "transparent";
    } else {
        navbar.style.backgroundColor = "white";
    }
});

// adjust background-color navbar on resizing

window.addEventListener("resize", function () {
    console.log(document.body.clientWidth);
    if (document.body.clientWidth >= 992) {
        navbar.style.backgroundColor = "transparent";
    } else {
        navbar.style.backgroundColor = "white";
    }
});