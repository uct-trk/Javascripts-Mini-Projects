const hamburger = document.querySelector(".hamburger");
const about = document.querySelector(".about");

hamburger.addEventListener("click", () => {
    about.classList.toggle("open");
    const t1 = gsap.timeline();

    if(about.classList.contains("open")){
        t1.to(about, 1, {clipPath: "circle(2000px at 100% -20%"})
        t1.to(".cizgi1", 0.5, {rotate: "45deg", y:"5px"}, "-= 1");
        t1.set(".cizgi2",  {display: "none"}, "-= 1.5");
        t1.to(".cizgi3", 0.5, {rotate: "-45deg", y:"-5px"}, "-= 1");
        t1.fromTo('.social-links', 0.5, {opacity:0}, {opacity: 1},"-=0.4");
        t1.fromTo('.about-text', 1, {opacity: 0}, {opacity: 1},"-=0.4");
    } else {
        t1.to(about, 1, {clipPath: "circle(50px at 100% -20%"})
        t1.to(".cizgi1", 0.5, {rotate: "0", y:"0"}, "-= 1");
        t1.set(".cizgi2", {display: "block"}, "-= 1");
        t1.to(".cizgi3", 0.5, {rotate: "0", y:"0"}, "-= 1");
    }
});