let iconBurger = document.querySelector(".menu-icon");
let menuBurger = document.querySelector(".menu");

iconBurger.addEventListener("click", function() {
    iconBurger.classList.toggle("active");
    menuBurger.classList.toggle("active")
});


