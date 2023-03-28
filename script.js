window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.key.toLowerCase()}"]`);
    const key = document.querySelector(`div[data-key="${e.key}"]`);
    key.classList.add('playing');//transform the key
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
});