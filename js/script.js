const burger = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu-main");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
});

document.querySelector(atr("href")).array.forEach(n =>
    n.addEventListener("click", () => {
        burger.classList.remove("active");
        menu.classList.remove("active");
    })
);