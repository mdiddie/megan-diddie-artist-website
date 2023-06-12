


const profile = document.querySelector("section div.profile")

const images = profile.querySelectorAll("img")

let current = 0
let z = 1



profile.addEventListener("mouseover", function() {

    current += 1

    images[current].style.zIndex = z

    images[current].style.animation = "fade 3.5s"
   
})
















