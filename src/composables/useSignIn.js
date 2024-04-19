import { ref } from "vue";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "@/firebase";

export const useSignIn = (email, password) => {
  const errorMessage = ref();
  const signInWithEmail = async () => {
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
    } catch (error) {
      switch (error) {
        case "":
          errorMessage.value = "";
      }
    }
  };

  return {
    signInWithEmail,
    errorMessage,
  };
};
