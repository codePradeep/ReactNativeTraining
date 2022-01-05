
    

const EmailValidate = (text: string) => {
    console.log(text);
    let Email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (Email.test(text) === false) {
        console.log("Email is Not Correct");

        return false
    }
    else {
        return true
    }
}
const PasswordValidate = (text: string) => {
    console.log(text);
    let password = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (password.test(text) === false) {
        console.log("Email is Not Correct");

        return false
    }
    else {
        return true
    }
}


export {EmailValidate,PasswordValidate}