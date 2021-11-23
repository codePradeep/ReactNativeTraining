

export const isValidEmailID = (Email: string) => {

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (emailRegex.test(Email)) {
    return true;
  } else {
    return false;
  }
}

export const isValidUserName = (Username: string) => {

  const usernameRegex = /^(?=.{4,20}$)(?:[a-zA-Z\d]+(?:(?:\.|-|_)[a-zA-Z\d])*)+$/

  if (usernameRegex.test(Username)) {
    return true;
  } else {
    return false;
  }
}

export const isValidPasswordInpute = (props: string) => {

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  if (passwordRegex.test(props)) {
    return true;
  } else {
    return false;
  }
}

export const isValidConfirmPassword = (password: string, cpassword: string) => {
  if (password == cpassword) {
    return true;
  } else {
    return false;
  }
}