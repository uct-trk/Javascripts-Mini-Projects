const navbar = document.querySelector("nav");

function animation(){
    var controller = new ScrollMagic.Controller(); // bunu oluşturmamız gerekiyor scroll magic kullanabilmemiz için

    const t1 = gsap.timeline({defaults: {ease: Expo.InOut}});

    t1.fromTo(navbar, 1, {y : "-10rem"}, {y: 0});
    t1.fromTo(".banner-text", 1, {x:"-2rem", opacity:0},{x:0 , opacity:1}, "-= 1") //gsap bu şekilde oluşturulur yukarıda değişken ile belirtmemize gerek yok gsap document objesini direkt tanır. " -= 1 normal başlaması gereken süren bir saniye önce baslat demek"
    t1.fromTo(".banner-img", 2, {x: "5rem", opacity:0}, {x: 0, opacity:1}, "-= 2")
    t1.fromTo(".banner-img img", 0.5, {scale: 1.5}, {scale: 1});



    // about animations
    const t2 = gsap.timeline({defaults: {ease: Expo.InOut}});
    t2.fromTo(".about-text", 1, {x: "-4rem", opacity: 0}, {x:0 , opacity: 1})
    t2.fromTo(".about-img", 2, {x: "5rem", opacity:0}, {x: 0, opacity:1}, "-= 2")
    t2.fromTo(".about-img img", 0.5, {scale: 1.2}, {scale: 1});

    // scroll ile çalışma
    // triggerElement : sayfanın tavanı nereye geldiği zaman çalışıcak
    new ScrollMagic.Scene({
        triggerElement: "#about", // abouta geldiği zaman tetiklenecek
        triggerHook: 0.5, // ne kadar geldikten sonra çalışacağı
        reverse: false // bir kere çalışsın demek
    })
    .setTween(t2) // hangi animasyonun çalışacağını söylüyor
    .addTo(controller);

    // card animations
    const t3 = gsap.timeline({defaults: {ease: Expo.InOut}});
    t3.fromTo(".card", 3, {y: "8rem", opacity: 0}, {y:0 , opacity: 1, stagger: 0.4})
   

    new ScrollMagic.Scene({
        triggerElement: "#vid", // abouta geldiği zaman tetiklenecek
        triggerHook: 0.5, // ne kadar geldikten sonra çalışacağı
        reverse: false // bir kere çalışsın demek
    })
    .setTween(t3) // hangi animasyonun çalışacağını söylüyor
    .addTo(controller);
    t3.set(".card", { clearProps: "all"}); // css de verdiğimiz hover efecti çalışması için
}
animation()