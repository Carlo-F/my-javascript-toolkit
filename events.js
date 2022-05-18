let click = document.querySelector('#buttonId');

click.addEventListener('click', callbackFunction); //add event listener
click.removeEventListener('click', callbackFunction); //remove event listener

document.dispatchEvent(new CustomEvent("busy", {detail: true})); // custom event

document.addEventListener("busy", (e) => {//do something});
