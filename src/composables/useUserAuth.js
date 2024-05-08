import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  // onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useInputValidation } from "@/composables/useInputValidation";

import { auth } from "@/firebase";
import { useUsersStore } from "@/stores/users.js";
import { useAnnouncementsStore } from "@/stores/announcements.js";

export const useUserAuth = ({ login, email, password, repeatPassword }) => {
  const userStore = useUsersStore();
  const announcementsStore = useAnnouncementsStore();
  const router = useRouter();
  const errorMessage = ref();
  const isSigningInWithEmail = ref(false);

  const clearUser = () => {
    userStore.user = {
      ...userStore.user,
      isLogged: false,
      email: "",
      login: "",
      avatar: "",
    };
  };

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

  const conditionsForRegistration = [
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

  const handleSignUpWithEmail = async () => {
    errorMessage.value = "";
    isSigningInWithEmail.value = true;
    if (
      checkLogin() &&
      checkEmail() &&
      checkPassword() &&
      checkPasswordMatch()
    ) {
      try {
        await createUserWithEmailAndPassword(auth, email.value, password.value);
        router.push("/");
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

  const handleSignInWithEmail = async () => {
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      userStore.user = {
        ...userStore.user,
        isLogged: true,
        email: email.value,
        login: email.value,
      };

      announcementsStore.addNewAnnouncement({
        status: "success",
        message: "You have signed in!",
      });
      router.push("/");
    } catch (error) {
      announcementsStore.addNewAnnouncement({
        status: "error",
        message: "You have not logged in.",
      });
      switch (error.code) {
        case "auth/invalid-credential":
          errorMessage.value =
            "The login details you provided are incorrect. Please check your email address and password and try again.";
          break;
        case "auth/invalid-email":
          errorMessage.value =
            "Invalid email address. Please enter a valid email.";
          break;
        case "auth/user-disabled":
          errorMessage.value =
            "Your account has been disabled. Please contact support.";
          break;
        case "auth/user-not-found":
          errorMessage.value =
            "Account not found. Please check your email address.";
          break;
        case "auth/wrong-password":
          errorMessage.value = "Incorrect password. Please try again.";
          break;

        case "auth/network-request-failed":
          errorMessage.value =
            "Failed to sign in. Please check your internet connection and try again.";
          break;
        default:
          errorMessage.value = "An error occurred. Please try again later.";
      }
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
    clearUser();

    announcementsStore.addNewAnnouncement({
      id: Math.random(),
      status: "success",
      message: "You have signed out!",
    });

    router.push("/");
  };

  // const handleAutoSignIn = () => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       userStore.user = {
  //         ...userStore.user,
  //         isLogged: true,
  //         email: user.email,
  //         login: user.email,
  //       };
  //       announcementsStore.addNewAnnouncement({
  //         status: "success",
  //         message: "You have signed in automatically!",
  //       });
  //     } else {
  //       clearUser();
  //     }
  //   });
  // };

  return {
    conditionsForRegistration,
    checkLogin,
    checkEmail,
    checkPassword,
    checkPasswordMatch,
    handleSignUpWithEmail,
    handleSignInWithEmail,
    // handleAutoSignIn,
    handleSignOut,
    errorMessage,
  };
};
