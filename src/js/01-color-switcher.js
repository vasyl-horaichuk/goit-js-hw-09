
const startBtnRef = document.querySelector('button[data-start]');
const stopBtnRef = document.querySelector('button[data-stop]');
const bodyRef = document.querySelector('body');

let timerId = null;
startBtnRef.disabled = false;
stopBtnRef.disabled = true;

const onByTargetBgcStart = (e) => {
    timerId = setInterval(() => {
    const color = getRandomHexColor();
    bodyRef.style.backgroundColor = color;
    startBtnRef.disabled = true;
    stopBtnRef.disabled = false;
}, 1000);
}

const onByTargetBgcStop = (e) => {
    startBtnRef.disabled = false;
    stopBtnRef.disabled = true;
    clearInterval(timerId);
    bodyRef.style.backgroundColor = null;

}

startBtnRef.addEventListener('click', onByTargetBgcStart);
stopBtnRef.addEventListener('click', onByTargetBgcStop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
