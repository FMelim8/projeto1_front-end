import { defineStore } from "pinia";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/init.js";
import { ref } from 'vue';

export const useAuthStore =  defineStore("authStore", () => {

    const user = ref({});

    const init = () => {
        onAuthStateChanged(auth, (userDetails) => {
            console.log("Auth state changed")
            console.log(userDetails)
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
                console.log(user)
                // ... 
            })
            .catch((error) => {
               console.log(error.message)
            });
    };

    const loginUser = (credentials) =>{
        signInWithEmailAndPassword(auth, credentials.email, credentials.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                // ...
            })
            .catch((error) => {
                console.log(error.message)
            });
    }

    const logoutUser = () => {
        signOut(auth)
        .then(() => {
            console.log("Logged out")
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