

// Select
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

// Buttons /  Butonlar
const preBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter sayac
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Button  listener

nextBtn.addEventListener('click', () => {
    if(counter >= carouselImages.length -1) return // hızlı  hızlı ileri tusuna basınca resimlerdeki bug u önler
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++; // bir arttırarak resimleri geçmeyi sağlar
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

preBtn.addEventListener('click', () => {
    if (counter <= 0) return; // hızlı hızlı tıkladığımızda resimlerin bug a girmesini engeller
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--; // bir arttırarak resimleri geçmeyi sağlar
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
    if (carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
})