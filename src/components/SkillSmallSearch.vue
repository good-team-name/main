<script setup lang="ts">
import { SkillSmall } from '../types';

const props = defineProps<{
    skill: SkillSmall

}>()

const emit = defineEmits<{
}>()

</script>

<template>
    <div class="skillSmallS">
        <img :src="skill.iconUrl">
        <h4>{{ skill.name }}</h4>
        

        
    </div>


</template>

<style scoped lang="scss">
.skillSmallS {
    background-color: white;
    padding: 3px;
    display: flex;
    align-items: center;
    img {
        width: 40px;
        height: 40px;
        margin-right: 10px;
    }
}

</style>