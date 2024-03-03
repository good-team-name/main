<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '../stores/User';
import { storeToRefs } from 'pinia';
import { User } from '../API';
import { useRouter } from 'vue-router';

const userStore = useUserStore();

const router = useRouter();

const { uid, idToken, google_user } = storeToRefs(userStore);

const usernameRaw = ref("");

const createUser = async () => {
    if (google_user.value) {
        if (usernameRaw.value != "") {
            const user = await User.createUser(usernameRaw.value, google_user.value.photoURL || '');

            userStore.$patch({
                user_data: user,

            })

            router.push(`/user/${user.id}`);

        } else {
            alert("USERNAME MUST NOT BE EMPTY")
        }

    } else {
        userStore.logout()
    }

}
</script>

<template>
    <div class="signupView">
        <div class="hero">
            <h1>What's your username?</h1>
            <input @submit="createUser" name="username" placeholder="myUsername123" v-model="usernameRaw">

            <div @click="createUser" class="startButton">Begin your journey!</div>
        </div>
    </div>

</template>

<style scoped lang="scss">
* {
    font-family: "Press Start 2P", system-ui;
}

.signupView {
    width:100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('../assets/waterBG.png');
    background-size: cover; 
    background-position: center;
    background-repeat: no-repeat;


}

.hero {
    width: 40%;
    height: 50%;
    background-color: #2B2038;
    outline: 5px solid #FFCAEA;
    border-radius: 10px;
    padding: 20px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    h1 {
        text-align: center;
        font-size: 2.5rem;
    }

    input {
        color: white;
        background-color: #5E3D63;
        padding: 10px;
        font-size: 1.8rem;
        text-align: center;

    }
}

.startButton {
    border: 4px solid white;
    background-color: white;
    color: black;
    padding: 10px;
    border-radius: 4px;
    user-select: none;


    &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0);
        color: white;
    }
}
</style>



