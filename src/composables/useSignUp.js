import { auth } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useInputValidation } from "@/composables/useInputValidation";
export const useSignUp = (login, email, password, repeatPassword) => {
  const {
    validateWhiteSpaces,
    validateEmail,
    validatePasswordLength,
    validateCapitalLetter,
    validateNumber,
    validateSpecialCharacter,
    validatePasswordMatch,
  } = useInputValidation();

  const checkLogin = () => validateWhiteSpaces(login.value);
  const checkEmail = () => validateEmail(email.value);
  const checkPassword = () =>
    validatePasswordLength(password.value) &&
    validateCapitalLetter(password.value) &&
    validateNumber(password.value) &&
    validateSpecialCharacter(password.value);
  const checkPasswordMatch = () =>
    checkPassword &&
    validatePasswordMatch(password.value, repeatPassword.value);

  const successMessages = [
    {
      text: "✔ No break characters in login",
      function: () => validateWhiteSpaces(login.value),
    },
    {
      text: "✔ The email has the correct format",
      function: () => validateEmail(email.value),
    },
    {
      text: "✔ The password consists of at least 8 characters",
      function: () => validatePasswordLength(password.value),
    },
    {
      text: "✔ The password has at least 1 capital letter",
      function: () => validateCapitalLetter(password.value),
    },
    {
      text: "✔ The password has at least 1 number",
      function: () => validateNumber(password.value),
    },
    {
      text: "✔ The password has at least 1 special letter",
      function: () => validateSpecialCharacter(password.value),
    },
    {
      text: "✔ The first and repeated password are the same",
      function: () => checkPasswordMatch(),
    },
  ];

  const signUpWithEmail = async () => {
    if (
      checkLogin() &&
      checkEmail() &&
      checkPassword() &&
      checkPasswordMatch()
    ) {
      await createUserWithEmailAndPassword(auth, email.value, password.value);

      console.log("Success!");
    } else {
      console.log("Fulfill all conditions.");
    }
  };

  return {
    successMessages,
    checkLogin,
    checkEmail,
    checkPassword,
    checkPasswordMatch,
    signUpWithEmail,
  };
};
