import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { User, getAuth, onAuthStateChanged } from "firebase/auth"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_oDTPg2DLvKxJmU4qfsTZ2xrfKxAkpfI",
  authDomain: "skilltree-quest.firebaseapp.com",
  projectId: "skilltree-quest",
  storageBucket: "skilltree-quest.appspot.com",
  messagingSenderId: "596194069644",
  appId: "1:596194069644:web:253a2d8841b7fc02667fa9",
  measurementId: "G-P4FVDLBRHX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const getCurrentUser = () : Promise<User | null> => {
  return new Promise((resolve, reject) => {
      const removeListener = onAuthStateChanged(
          getAuth(), (user) => {
              removeListener()
              resolve(user)
          },
          reject
      )
  })

}