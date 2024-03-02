<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Skill } from "../API"
import SkillViewFinder from "../skills/SkillFinder.vue"
import SkillContent from '../skills/SkillContent.vue';


const route = useRoute();
const router = useRouter();

const idFromUrl: string = route.params.id as string;
const selectedID = ref("");

selectedID.value = idFromUrl;


const currRoute = computed(() => {
    return route.params.id as string;
})

const skill = computed(() => {
    return Skill.get(currRoute.value);
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
    <div class="skillViewMain">
        <SkillViewFinder :skill="skill"></SkillViewFinder>
        <SkillContent :skill="skill"></SkillContent>
    </div>
</template>

<style scoped lang="scss">
.skillViewMain {
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-rows: 40% 60%;

    border-radius: 10px;




}
</style>