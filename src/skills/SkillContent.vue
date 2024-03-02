<script setup lang="ts">
import ResourceLink from '../components/ResourceLink.vue';
import { SkillBig } from '../types';

const props = defineProps<{
    skill: SkillBig

}>()

const emit = defineEmits<{
}>()

</script>

<template>

    <div class="skillContent">
        <div class="description">

            <p>{{skill.description}}</p>
        </div>
    <div class="resourceContainer">
        <ResourceLink class="individualResource" :resource="resource" v-for="resource in skill.resources"></ResourceLink>


    </div>
</div>

</template>

<style scoped lang="scss">
.skillContent {
    height:100%;
    width:100%;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.description {
    margin-bottom: 20px;
    font-style: italic;
}
.individualResource {
    margin: 10px;

}

.resourceContainer {
    width: 30%;
   

}

</style>