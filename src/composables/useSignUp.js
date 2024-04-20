import { ref } from "vue";
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
      text: "No break characters in login",
      function: () => validateWhiteSpaces(login.value),
    },
    {
      text: "The email has the correct format",
      function: () => validateEmail(email.value),
    },
    {
      text: "The password consists of at least 8 characters",
      function: () => validatePasswordLength(password.value),
    },
    {
      text: "The password has at least 1 capital letter",
      function: () => validateCapitalLetter(password.value),
    },
    {
      text: "The password has at least 1 number",
      function: () => validateNumber(password.value),
    },
    {
      text: "The password has at least 1 special letter",
      function: () => validateSpecialCharacter(password.value),
    },
    {
      text: "The first and repeated password are the same",
      function: () => checkPasswordMatch(),
    },
  ];

  const errorMessage = ref("");
  const signUpWithEmail = async () => {
    errorMessage.value = "";
    if (
      checkLogin() &&
      checkEmail() &&
      checkPassword() &&
      checkPasswordMatch()
    ) {
      try {
        await createUserWithEmailAndPassword(auth, email.value, password.value);

        console.log("Success!");
      } catch (error) {
        switch (error.code) {
          case "auth/network-request-failed":
            errorMessage.value =
              "Failed to sign up. Please check your internet connection and try again.";
            break;
          case "auth/email-already-in-use":
            errorMessage.value =
              "This email address is already in use. Please use a different email address.";
            break;
          case "auth/operation-not-allowed":
            errorMessage.value =
              "Account creation via email and password is not enabled. Please contact support for assistance or try again later.";
            break;
          case "auth/too-many-requests":
            errorMessage.value =
              "Too many registration attempts. Please try again later.";
            break;
          default:
            errorMessage.value = "An error occurred. Please try again later.";
        }
      }
    } else {
      errorMessage.value = "Please complete all conditions below.";
    }
  };

  return {
    successMessages,
    checkLogin,
    checkEmail,
    checkPassword,
    checkPasswordMatch,
    signUpWithEmail,
    errorMessage,
  };
};
