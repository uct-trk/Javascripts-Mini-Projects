const moonPath = "M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z";

const sunPath = "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"

const darkMode = document.querySelector("#darkMode");
let toggle = false;


// we need to click on the sun
darkMode.addEventListener('click', () => {
    // we need to use anime.js- anime js kullanmalıyız
    // here we set up the timeline- timeline ı kurmalıyız 
    const timeline = anime.timeline({
        duration : 750,
        easing : "easeOutExpo"
    });
    // add diferent animations to the timeline
    // timeline a baska bir animasyon eklemeliyiz
    timeline.add({
        targets: ".sun",
        d: [
            {value: toggle ? sunPath : moonPath}
        ]
    })
    .add({
        targets: '#darkMode',
        rotate: 320
    }, '-= 350'
    )
    .add({
        targets: "section",
        color: toggle ? 'rgb(22,22,22)' : 'rgb(255, 255, 255)',
        backgroundColor: toggle ? 'rgb(255,255,255)' : 'rgb(22,22,22)'
    }, '-= 700'
    );
    
    // everytime ı click on the sun ı want that toggle to switch
    // her tıkladığımızda ki değişim
    if(!toggle){
        toggle = true;
    } else{
        toggle = false;
    }

})
