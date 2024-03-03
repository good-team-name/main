<script setup lang="ts">
import { useUserStore } from '../stores/User';

const userStore = useUserStore();
</script>

<template>
<div class="loginMain">
    <div class="loginContainer">
        <h1 class="title">LOGIN WITH:</h1>
        <div class="loginOptionsContainer">
            <div @click="userStore.login()" class="loginOption">
                <img id="googleIcon" src="../assets/GOOGLE.png">
            </div>
            <div class="loginOption">
                <img id="gitIcon" src="../assets/GITHUB.png">
            </div>
        </div>
    </div>
</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');


.loginMain {
    width: 100%;
    height: 100%;
    display: flex;
    font-family: "Press Start 2P", system-ui;

    background-image: url('../assets/waterBG.png');
    background-size: cover; 
    background-position: center;
    background-repeat: no-repeat;

    justify-content: center;
    align-items: center;
}

.title {
    color: #EFB1FF;
    padding-top: 80px;
    font-size: 2.5rem;
    text-align: center;
}

.loginContainer {
    background-color: #2B2038;
    outline: 6px solid #FFCAEA;
    display: flex;
    flex-direction: column;
}

.loginOptionsContainer {
    padding: 100px;
    padding-top: 70px;
    padding-bottom: 50px;
    display: flex;
    flex-direction: row;
    gap: 100px;
}

.loginOption {
    transition: 0.5s;
    padding: 30px;
    letter-spacing: 0;
    background-color: #6C507E;


    display: flex;
    justify-content: center;
    align-items: center;
}

.loginOption:hover {
    
    cursor: pointer;
    background-color: #876A99;
}

img {
    width: 110px;
    height: 110px;
}



</style>