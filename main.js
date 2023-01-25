// Je recupère le body et la div toggle ou il y a mes boutton en display none//


var toggle = document.querySelector(".toggle")
let body = document.querySelector("body")

// Ensuite je fais un évenement pour que au click le toggle ce declanche et mes links apparaise ou pas //

toggle.addEventListener("click", function () {
    body.classList.toggle('open')
})