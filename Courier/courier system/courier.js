window.addEventListener('DOMContentLoaded', (event) => {
    let element = document.querySelector("#csn");
    let number = Math.floor(Math.random() * 899999 + 100000);
    element.value = number;
    
});