<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Skill } from '../API'

const router = useRouter();

let name = '';

const submitHandler = () => {
    Skill.create(name)
    router.push('/skill/edit')
    
}

</script>

<template>
<div class="createViewMain">
    <p class="formTitle">CREATE A SKILL:</p>
    <form @submit="submitHandler">
        <input type="text" placeholder=">  Enter skill name... " v-model="name"></input>
    </form>
</div>
</template>

<style scoped lang="scss">
@font-face{
  font-family: "Press Start";
  src: url("../assets/fonts/PressStart2P-Regular.ttf");
}

.formTitle {
    font-size: 2.5rem;
    font-weight: bold;
    font-family: 'Press Start';
    color: #FFE86D;
    letter-spacing: 0;
    -webkit-text-stroke-width: 0.07em;
    -webkit-text-stroke-color: black;
}

.createViewMain {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 200px;
    gap: 30px;
    align-items: center;
    justify-content: center;
    background-color: gray;
}

input {
    font-size: 1.6rem;
    padding: 0.8em 10em 0.8em 0.5em;
    background-color: #FFF4D7;
    border: 5px solid black;
}

</style>