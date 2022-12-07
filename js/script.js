let keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener('click', () => playMusic(key));
});

function playMusic(key) {
    const audio = document.getElementById(key.dataset.note);
    audio.currentTime = 0;
    audio.play();
}