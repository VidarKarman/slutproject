document.getElementById("menubutton").addEventListener("click", showMenu);

let layer = document.querySelector(".fade-layer");
layer.addEventListener("click", showMenu);

function showMenu() {
    let menu = document.querySelector("nav.menu");
    menu.classList.toggle("show");

    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("visible");
}
