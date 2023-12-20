const pianoKeys = document.querySelectorAll(".piano-keys .key");
const keyList = [];
const volumeSlider = document.querySelector(".volume-slider input")
const keysCheck = document.querySelector(".keys-check input");
let audio = new Audio();

function playTune (key) {
    audio.src = `./assets/tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => clickedKey.classList.remove("active"), 150);
};

pianoKeys.forEach((key) => {
    keyList.push(key.textContent);
    key.addEventListener("click", () => playTune(key.dataset.key));
});

document.addEventListener("keydown", (key) => {
    if(keyList.includes(key.key)){
        playTune(key.key);
    }
})

function handleVolume (event) {
    audio.volume = event.target.value;
}

audio.volume = volumeSlider.value;
volumeSlider.addEventListener("input", handleVolume);

function showHideKeys (){
    pianoKeys.forEach((key) => key.classList.toggle("hide"));
}

keysCheck.addEventListener("click", showHideKeys);