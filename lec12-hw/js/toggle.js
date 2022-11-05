"use strict";
const toggler = document.getElementById("btn");
localStorage.setItem("userDefault", 'light-mode');
let mode = 'light-mode';
toggler.addEventListener("click", () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
    if (mode == "light-mode") {
        localStorage.setItem("userDefault", 'dark-mode');
        mode = "dark-mode";
    }
    else {
        localStorage.setItem("userDefault", 'light-mode');
        mode = "light-mode";
    }
});
