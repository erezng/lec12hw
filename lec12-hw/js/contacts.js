"use strict";
const rectNameInput = document.getElementById("rect-name");
const rectFamilyInput = document.getElementById("rect-last");
const rectPhoneInput = document.getElementById("rect-phone");
const rectButton = document.getElementById("btn-click");
const contactbox = document.getElementById('box');
class contact {
    name;
    family;
    phone;
    constructor(name, family, phone) {
        this.name = name;
        this.family = family;
        this.phone = phone;
    }
}
let contacts = [];
let con1 = new contact('erez', 'gabay', '05288888');
let con2 = new contact('igal', 'shilon', '052652568');
rectButton.addEventListener("click", () => {
    const name = rectNameInput.value;
    const family = rectFamilyInput.value;
    const phone = rectPhoneInput.value;
    let con3 = new contact(name, family, phone);
    contactbox.innerHTML += JSON.stringify(con3);
});
contacts.push(con1, con2);
contactbox.innerHTML = JSON.stringify(contacts);
