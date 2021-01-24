const greetingForm = document.querySelector(".js-greetingForm");
const greetingInput = greetingForm.querySelector(".js-greetingInput");
const greeting = document.querySelector(".h2UserName");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";


function saveUserName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    let currentValue = greetingInput.value;
    showGreeting(currentValue);
    saveUserName(currentValue);
}

function askForName() {
    greetingForm.classList.add(SHOWING_CN);
    greetingForm.addEventListener("submit", handleSubmit);
}

function showGreeting(text) {
    greetingForm.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        askForName();
    } else {
        showGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();