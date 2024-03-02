<script setup lang="ts">
import { SkillSmall } from '../types';

defineProps<{
    skill: SkillSmall

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
    padding: 1.2cqw;

    user-select: none;
    h1 {
        font-size: 1cqw;
        text-decoration: underline;

        &:hover {
            cursor: pointer;
        }
    }

    .image {
        width: 5cqw;
        height: 5cqw;

        background-size: cover;

        border-radius: 1000px;
        &:hover {
            cursor: pointer;
        }
    }

}

</style>