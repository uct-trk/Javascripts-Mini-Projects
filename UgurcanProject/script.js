const primary = document.querySelector(".primary");               
const secondary = document.querySelector(".secondary");               
const success = document.querySelector(".success");               
const danger = document.querySelector(".danger");               
const warning = document.querySelector(".warning");               
const info = document.querySelector(".info"); 

const navbar = document.querySelector(".navi");
const footer = document.querySelector(".foot")


               
primary.addEventListener("click", () => {
    navbar.style.background = "blue";
    footer.style.background = "blue";
    primary.style.background = "blue";
})
secondary.addEventListener("click", () => {
    navbar.style.background = "grey";
    footer.style.background = "grey";
    secondary.style.background = "grey";
})  
success.addEventListener("click", () => {
    navbar.style.background = "green";
    footer.style.background = "green";
    success.style.background = "green";
})   
danger.addEventListener("click", () => {
    navbar.style.background = "red";
    footer.style.background = "red";
    danger.style.background = "red";
})  
warning.addEventListener("click", () => {
    navbar.style.background = "gold";
    footer.style.background = "gold";
    warning.style.background = "gold";
})  
info.addEventListener("click", () => {
    navbar.style.background = "lightblue";
    footer.style.background = "lightblue";
    info.style.background = "lightblue";
})  

// reset button
const input2 = document.querySelector(".form")
const reset = document.querySelector(".reset")

reset.disabled = true

input.addEventListener("change", stateHandle1)

function stateHandle1() {
  if (document.querySelector(".form").value == "") {
    reset.disabled = true
  } else {
    reset.disabled = false
  }
}

reset.addEventListener("click", () => {
    navbar.style.background = "white";
    footer.style.background = "white";
})
   

// submit button
const input = document.querySelector(".input")
const button = document.querySelector(".button")

button.disabled = true

input.addEventListener("change", stateHandle)

function stateHandle() {
  if (document.querySelector(".input").value === "") {
    button.disabled = true
  } else {
    button.disabled = false
  }
}