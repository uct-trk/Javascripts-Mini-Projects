const texts = ['websites', 'illustrations', 'pancakes'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index) // 0. index dahil hepsini yazdırır
    document.querySelector('.typing').textContent = letter
    if (letter.length === currentText.length) {
        count++;
        index = 0; // reset atıp yeniden baslamamızı saglar
    }
    setTimeout(type, 400);

}()); // fonksiyon hemen aktif hale gelir otomatik invoke olur