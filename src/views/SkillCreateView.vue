<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Skill } from '../API'
import { ref } from 'vue';

const router = useRouter();

const name = ref('');

const createSkill = async () => {
    if (name.value.length > 0) {
        const id = await Skill.create(name.value);
        router.push(`/skill/edit/${id}`);
    }
}

</script>

<template>
    <div class="createViewMain">
        <p class="formTitle">CREATE A SKILL:</p>
        <input @submit="createSkill()" type="text" placeholder="> Enter skill name... " v-model="name"></input>
        <div class="createButton" @click="createSkill()">Create!</div>
    </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

* {
    font-family: "Press Start 2P", system-ui;
}

.formTitle {
    font-size: 3rem;
    font-weight: bold;
    color: #D5B5FF;
    letter-spacing: 0;
    -webkit-text-stroke-width: 0.07em;
    -webkit-text-stroke-color: #26133E;
}

.createViewMain {
    background-image: url('../assets/waterBG.png');
    background-size: cover; 
    background-position: center;
    background-repeat: no-repeat;

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 200px;
    gap: 30px;
    align-items: center;
    justify-content: center;
}

input {
    font-size: 1.6rem;
    padding: 0.8em 10em 0.8em 0.5em;
    background-color: #43304B;
    border: 5px solid #FFCAEA;
    color: white;
}

.createButton {
    transition: 0.5s;
    background-color: #F596CF;
    color: black;
    padding: 10px;
    border-radius: 4px;
    user-select: none;

    &:hover {
        cursor: pointer;
        box-shadow: 3px 8px black;
        transform: translateY(-5%);

    }
}
</style>