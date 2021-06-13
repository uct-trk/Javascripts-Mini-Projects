
// selectors
const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

// butona tıkladığımızda content alanı değişecek
about.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    console.log(id)
    if(id){
        // remove active from other buttons
        btns.forEach((btn) => {
            btn.classList.remove("active");
            e.target.classList.add("active")
        });
        // hide other articles
        articles.forEach((article) => {
            article.classList.remove("active");
        })
        const element = document.getElementById(id);
        element.classList.add("active");  
    }
})