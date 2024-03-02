<script setup lang="ts">

</script>

<template>
<div class="loginMain">
    <h1 class="title">Login!</h1>
    <div class="loginOptionsContainer">
        <div class="loginOption">
            LOGIN WITH GOOGLE
            <img id="googleIcon" src="../assets/GOOGLE.png">
        </div>
        <div class="loginOption">
            LOGIN WITH GITHUB
            <img id="gitIcon" src="../assets/GITHUB.png">
        </div>
        <div class="loginOption">
            LOGIN WITH WIKIPEDIA
            <img id="wikiIcon" src="../assets/WIKI.png"> 
        </div>
    </div>
</div>
</template>

<style>
@font-face{
  font-family: "Press Start";
  src: url("../assets/fonts/PressStart2P-Regular.ttf");
}

* {
    font-family: "Press Start";
}

.loginMain {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.title {
    font-size: 3rem;
}

.loginOptionsContainer {
    padding: 100px;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.loginOption {
    font-size: 1.1rem;
    padding: 1.4em;
    padding-right: 200px;
    color: #4B2A75;
    letter-spacing: 0;
    background-color: #F596CF;
    border: 6px solid #70287C;
    justify-content: center;
    cursor: pointer;
    position: relative;
}

img {
    position: absolute;
    top: 2px;
    right: 10px;
    width: 70px;
    height: 70px;
}



</style>