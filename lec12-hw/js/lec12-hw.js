export class Validators {
    static checkValidAge(age) {
        return age > 0 && age < 120;
    }
    static checkValidEmail(email) {
        return email.length > 4 && email.includes("@");
    }
    static checkValidUserName(username) {
        return username.length > 2 && !/[0-9]/.test(username);
    }
}
const mail = 'erez@gmail.com';
if (Validators.checkValidEmail(mail))
    console.log("Hmmm, the age looks good!");
else
    console.log("Hmmm, the age must be a valid number");
