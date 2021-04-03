function appear(){
    var introText = document.querySelector('.intro-text');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3; // 1.3 yapmamızın sebebi pozisyonun belirtilen oranda aktif hale gelmesini sağlarız

    if (introPosition < screenPosition){
        introText.classList.add('intro-appear');
    }
}

window.addEventListener('scroll',appear);