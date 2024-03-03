<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/User';



const router = useRouter();

const clickHandler = () => {
    router.push('/login')
}


</script>

<template>
    <div class="loginMain">
        <div class="mainContainer">
            <h1 class="title">Level Up<br> Your Skills</h1>
            <h2 class="desc">Currently Stem Focused</h2>
            <div class="buttonContainer">
                <button class="signUpButton" @click="clickHandler">SIGN UP</button>
                <button class="logInButton" @click="clickHandler">LOGIN</button>
            </div>
        </div>
        <div class="iconContainer"></div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');


* {
    font-family: "Press Start 2P", system-ui;
}

.loginMain {

    background-image: url('../assets/waterBG.png');
    background-size: cover; 
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: row;
}

.mainContainer {
    padding: 100px;
    padding-right: 0;
    display: flex;
    flex-direction: column;

}

.title {
    color: white;
    text-align: left;
    font-size: 4rem;
    padding-bottom: 30px;
}

.desc {
    font-size: 1rem;
    width: 500px;
    padding-bottom: 50px;
}

.buttonContainer {
    display: flex;
    flex-direction: row;
    gap: 20px;
}

button {
    transition: .5s;
    cursor: pointer;
    font-size: 0.8rem;
    width: 15em;
    padding: 0.8em;
    background-color: #F596CF;
}

button:hover {
    box-shadow: 2px 5px black;
    transform: translateY(-8%);
}

.iconContainer {
    width: 450px;
    height: 450px;
    margin-left: 200px;
    margin-bottom: 100px;
    background-image: url("../assets/landingIcon.png");
    background-size: cover; /* or 'contain' based on your preference */
    background-position: center;
    background-repeat: no-repeat;
}
</style>