
function playAudio(sound){
    var audio = new Audio(sound);
    audio.play()
}

// attach event listeners to each element:
for (const button of document.querySelectorAll('button')) {
    button.onclick = (ev) => {
        const sound = ev.currentTarget.dataset.sound;
        playAudio('sounds/' + sound);
    }
}
