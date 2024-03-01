<script setup lang="ts">
import { Skill } from '../types';

defineProps<{
    skill: Skill

}>()

const emit = defineEmits<{
    click: []
}>()

</script>

<template>
    <div class="skillMain">
        <div @click="emit('click')" class="image" :style="`background-image: url(${skill.iconUrl});`"></div>
            <h1 @click="emit('click')">{{ skill.name }}</h1>
    </div>

</template>

<style scoped lang="scss">

.skillMain {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;

    user-select: none;
    h1 {
        font-size: 1em;
        text-decoration: underline;

        &:hover {
            cursor: pointer;
        }
    }

    .image {
        width: 7em;
        height: 7em;

        background-size: cover;

        border-radius: 1000px;
        &:hover {
            cursor: pointer;
        }
    }

}

</style>