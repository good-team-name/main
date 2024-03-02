<script setup lang="ts">
import { Ref, computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Skill } from "../API"
import SkillViewFinder from "../skills/SkillFinder.vue"
import SkillContent from '../skills/SkillContent.vue';
import { SkillBig } from '../types';
import { onMounted } from 'vue';


const route = useRoute();
const router = useRouter();

const idFromUrl: string = route.params.id as string;
const selectedID = ref("");

selectedID.value = idFromUrl;

const skill: Ref<SkillBig | null> = ref(null);

const currRoute = computed(() => {
    return route.params.id as string;
})

// skill.value = await Skill.get(currRoute.value);
onMounted(async () => {

    Skill.get(currRoute.value).then((sk) => {
        skill.value = sk;
    })

})


watch(selectedID, async (id) => {

    router.push({
        params: {
            id
        }
    })

    skill.value = await Skill.get(selectedID.value);

})

</script>

<template>
    <div class="skillViewMain" v-if="skill != null">
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