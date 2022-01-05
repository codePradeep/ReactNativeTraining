
    

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
const UsernameValidation = (text: string) => {

    const usernameRegex = /^(?=.{4,20}$)(?:[a-zA-Z\d]+(?:(?:\.|-|_)[a-zA-Z\d])*)+$/
  
    if (usernameRegex.test(text)) {
      return true;
    } else {
      return false;
    }
  }


export {EmailValidate,PasswordValidate,UsernameValidation}