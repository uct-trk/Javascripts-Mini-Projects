window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div"); // pads clasındaki  bütün divler
    const visual = document.querySelector(".visual")
    const colors = [
        "#474787",
        "#218c74",
        "#ffda79",
        "#ff5252",
        "#cd84f1",
        "#BDC581"
    ]

    // lets get going with the sound
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function(){
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        })
    });

    // makes bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index]
        bubble.style.animation = `jump 1s ease`
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this)
        })
    }
});