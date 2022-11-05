const rectNameInput = document.getElementById("rect-name") as HTMLInputElement;
const rectFamilyInput = document.getElementById("rect-last") as HTMLInputElement;
const rectPhoneInput = document.getElementById("rect-phone") as HTMLInputElement;
const rectButton = document.getElementById("btn-click") as HTMLButtonElement;
const contactbox = document.getElementById('box') as HTMLDivElement;
class contact {
    name;
    family;
    phone;
  constructor(name:string, family:string,phone:string) {
    this.name = name;
    this.family = family;
    this.phone = phone;
  }
}
let contacts=[];
let con1=new contact('erez','gabay','05288888');
let con2=new contact('igal','shilon','052652568');
rectButton.addEventListener("click", () => {
    contacts.push(rectNameInput.value,rectFamilyInput.value,rectPhoneInput.value);
});

contacts.push(con1,con2);
contactbox.innerHTML=JSON.stringify(contacts);
