//let minRubrik = document.querySelector(”h1”)

// Ändra h1’s css
//minRubrik.classList.toggle(”show”) 

function showMenu(){
    let menu = document.querySelector("nav.menu")
    menu.classList.toggle("show")

    let layer = document.querySelector(".fade-layer")
    layer.classList.toggle("visible")
}