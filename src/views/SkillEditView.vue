<script setup lang="ts">
import { Ref, computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Skill } from "../API"

import { SkillBig, SkillSmall } from '../types';
import { onMounted } from 'vue';
import SkillsSelect from '../components/SkillsSelect.vue';


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

const removeSkill = (skillArray: Array<SkillSmall>, id: string) => {
    skillArray = skillArray.filter((skill) => skill.id != id);
}

const addSkill = (skillArray: Array<SkillSmall>, newSkill: SkillSmall) => {
    skillArray = [...skillArray, newSkill];
}

const updateSkill = () => {
    let s = skill.value;

   
    if (s) {
        let preSkillsArr = s.preSkills.map((sk) => sk.id)
        let postSkillsArr = s.postSkills.map((sk) => sk.id)

        Skill.update(s.id, s.resources, s.name, s.iconUrl, s.description, preSkillsArr, postSkillsArr, [], [])

    }

    

}


</script>

<template>
    <div class="editViewMain" v-if="skill">
        <div class="leftSide">
            <div class="leftTop">
                <div class="iconPic">
                    Enter URL to image:
                    <input type="text" v-model="skill.iconUrl">
                </div>
                <div class="mainInfo">
                    <p class="subtitle mainInfoTitle">Name: {{ skill.name }}</p>
                    <p class="subtitle description">Description: </p>
                    <textarea id="descInput" cols="50" rows="10" v-model="skill.description"></textarea>
                </div>
            </div>

            <div class="leftBottom">
                <div class="prereqsContainer">
                    <p class="subtitle prereqsTitle">Prerequisites</p>
                    
                    <SkillsSelect v-model="skill.preSkills"></SkillsSelect>
                </div>

                <div class="unlocksContainer">
                    <p class="subtitle unlocksTitle">Unlocks</p>
                    <SkillsSelect v-model="skill.postSkills"></SkillsSelect>

                </div>
            </div>
        </div>

        <div class="resources">
            <p class="subtitle resourcesTitle"></p>
        </div>

        <div class="createButton" @click="updateSkill">Save!</div>
    </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');


.editViewMain {
    font-family: "Press Start 2P", system-ui;
    color: gray;
    padding: 4em;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 50px;
}

.leftSide {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 50px;
}

.resources {
    width: 50%;
    background-color: #FFF4D7;
}

.mainInfo {
    background-color: #FFF4D7;
    height: 100%;
    border: 4px solid white;
}

.leftBottom {
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 50px;
}

.leftTop {
    height: 100%;
    display: flex;
    flex-direction: row;
}

.iconPic {
    width: 80%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.prereqsContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 100%;
    overflow-y: scroll;
    position: relative;
    background-color: #FFF4D7;
    width: 100%;
    border: 4px solid white;
}

.addSkillForm {
    position: absolute;
    bottom: 10px;
}

.unlocksContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 100%;
    overflow-y: scroll;
    position: relative;
    background-color: #FFF4D7;
    width: 100%;
    border: 4px solid white;
}

.skillListEntry {
    position: relative;
    padding: 0.4em;
    margin-left: 0.6em;
    margin-right: 0.6em;
    margin-bottom: 0.5em;
    background-color: #E3CBBA;
}

.removeSkillButton {
    position: absolute;
    right: 10px;
}

.subtitle {
    margin-bottom: 1em;
}

#descInput {
    background-color: #E4CBBA;
    width: 100%;
    height: auto;
    padding: 8px;
    font-size: 1em;
    resize: none;
    border: solid 1px;
    border-radius: 4px;
    outline: none;
}

ul {
    list-style: none;
}

.createButton {
    position: fixed;
    bottom: 10px;
    right: 10px;
    background-color: white;
    border: 3px solid white;
    color: black;
    padding: 10px;
    border-radius: 4px;
    user-select: none;

    &:hover {
        cursor: pointer;
        background-color: rgba(0,0,0,0);
        color: white;

    }

}
</style>