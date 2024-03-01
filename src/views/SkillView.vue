<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getSkill, getUnlocked, getPrequesites } from "../skills";

import SmallSkill from '../components/SmallSkill.vue';

const route = useRoute();
const router = useRouter();

const idFromUrl: string = route.params.id as string;
const selectedID = ref("");

selectedID.value = idFromUrl;


const currRoute = computed(() => {
    return route.params.id as string;
})

const skill = computed(() => {
    return getSkill(currRoute.value);
})


watch(selectedID, (id) => {
    router.push({
        params: {
            id
        }
    })
})

</script>

<template>
    <div class="skillView">
        <div class="left-side">
            <SmallSkill @click="router.push(`/skill/${prereq.id}`)"  v-for="prereq in getPrequesites(currRoute)" :skill="prereq"></SmallSkill>
        </div>

        
        <div class="overlay">
            <div class="image" :style="`background-image: url(${skill.iconUrl});`"></div>
            <h1>{{ skill.name }}</h1>

           
        </div>

        <div class="right-side">

            <div class="resources">
                <h2>Level Up!</h2>
            
            </div>
            <SmallSkill @click="router.push(`/skill/${postReq.id}`)"  v-for="postReq in getUnlocked(currRoute)" :skill="postReq"></SmallSkill>

        </div>
       
    </div>

</template>

<style scoped lang="scss">

.resources {
    background-color: $sc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.left-side, .right-side {
    // background-color: red;
    width: 37vw;
}

.skillView {
    height: 100%;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    
}
.underlay {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 22px;



    height: 100%;
    width: 100%;

    h1 {
        font-size: 50px;
        text-decoration: underline;
    }

    .image {
        width: 200px;
        height: 200px;

        background-size: cover;

        border-radius: 100px;
    }
}
</style>