
    

const EmailValidate = (text: string) => {
    let Email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (Email.test(text) === false) {
        return false
    }
    else {
        return true
    }
}
const PasswordValidate = (text: string) => {
    let password = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (password.test(text) === false) {
        return false
    }
    else {
        return true
    }
}


export {EmailValidate,PasswordValidate}