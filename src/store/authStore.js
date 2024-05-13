import { defineStore } from "pinia";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/init.js";

export const useAuthStore = defineStore("authStore", () => {
    const registerUser = (credentials) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // ... 
            })
            .catch((error) => {
                const errorCode = error.code; 
                const errorMessage = error.message;
                // ..
            });
    }
    return{ 
        registerUser
    }
})