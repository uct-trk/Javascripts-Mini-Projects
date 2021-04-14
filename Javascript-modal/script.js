const modalBtn = document.getElementById("open-modal");
const modal = document.querySelector(".modal");
const modalClose = document.getElementById("close-modal");


modalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
})

modalClose.addEventListener("click", () => {
    modal.style.display = "none";
})