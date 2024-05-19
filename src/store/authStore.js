import { defineStore } from "pinia";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/init.js";
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export const useAuthStore =  defineStore("authStore", () => {

    const router = useRouter();
    const user = ref({});

    const init = () => {
        onAuthStateChanged(auth, (userDetails) => {
            if (userDetails) {
                const uid = userDetails.uid;
                user.value = { email: userDetails.email, uid }
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              // ...
            } else {
              user.value = {}
              // ...
            }
          });
    }

    const registerUser = (credentials) => {
        createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                router.push('/');
                // ... 
            })
            .catch((error) => {
                if (error.message == "Firebase: Password should be at least 6 characters (auth/weak-password)."){
                    alert("Password should be at least 6 characters");
                }
                else if (error.message == "Firebase: Error (auth/email-already-in-use)."){
                    alert("Email already exists");
                }
            });
    };

    const loginUser = (credentials) =>{
        signInWithEmailAndPassword(auth, credentials.email, credentials.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                router.push('/');
                // ...
            })
            .catch((error) => {
                if (error.message == "Firebase: Error (auth/invalid-credential)."){
                    alert("Incorrect e-mail or password");
                }
            });
    }

    const logoutUser = () => {
        signOut(auth)
        .then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
          
    }

    return{ 
        registerUser,
        loginUser,
        logoutUser,
        init,
        user
    }
})