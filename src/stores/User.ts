import { OAuthProvider, UserCredential, UserInfo, getAuth, onAuthStateChanged, signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";
import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import router from "../router";
import { UserBig } from "../types";
import { User } from "../API";

export const useUserStore = defineStore("user", () => {
    const idToken = ref<string>("");
    const loggedIn = ref<boolean>(false);
    const uid = ref<string>("");
    const provider = new OAuthProvider('google.com');

    const user_data: Ref<UserBig | undefined> = ref();
    const google_user: Ref<UserInfo | undefined> = ref();

    const resetFields = () => {
        uid.value = "";
        loggedIn.value = false;
        idToken.value = "";
        user_data.value = undefined;
        google_user.value = undefined;

    }

    const init = () => {
        onAuthStateChanged(getAuth(), (user) => {
            if (user) {
                loggedIn.value = true;
                uid.value = user.uid;
                google_user.value = user;
                
                user.getIdToken().then(async (token) => {
                    idToken.value = token;

                    try {
                        let ud = await User.getUser(uid.value, idToken.value);
                        user_data.value = ud;
                    

                    } catch (err: any) {

                        if (err == "noAccount") {
                            router.push("/signup")
                        } else {
                            console.log({err})
                            logout()
                            router.push("/");
                        }

                    }

                })

            } else {
                resetFields()
            }
        })
    }


    const login = async () => {
        const auth = getAuth();
        signInWithRedirect(auth, provider);
        
    }

    const logout = () => {
        const auth = getAuth();
        signOut(auth);
        router.push('/')
        resetFields();

    }


    return {
        login, logout,

        init,

        uid, idToken,

        loggedIn,



        user_data, google_user

    }

})