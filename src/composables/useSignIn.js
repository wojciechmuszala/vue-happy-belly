import { ref } from "vue";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import { useUsersStore } from "@/stores/users.js";

export const useSignIn = (email, password) => {
  const store = useUsersStore();
  const errorMessage = ref();

  const signInWithEmail = async () => {
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);

      store.user = {
        ...store.user,
        isLogged: true,
        email: email.value,
        login: email.value,
      };
    } catch (error) {
      switch (error.code) {
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
        // Dodaj więcej przypadków obsługi błędów, jeśli to konieczne
        default:
          errorMessage.value = "An error occurred. Please try again later.";
      }
    }
  };

  return {
    signInWithEmail,
    errorMessage,
  };
};
