<script setup lang="ts">
import { Skill } from '../API'
import { ref } from 'vue'

const currID = '1'
const currSkill = Skill.get(currID)
let prereqs = ref(currSkill.preSkills)
let unlocks = ref(currSkill.postSkills)

const value = currSkill.description

const newPrereqSkill = ''
const newUnlockSkill = ''

const removeUnlock = (name: string) => {
    unlocks.value = unlocks.value.filter((unlock) => unlock.name !== name)
}

const removePrereq = (name: string) => {
    prereqs.value = prereqs.value.filter((prereq) => prereq.name !== name)
}

const submitPrereq = (id: string) => {
    prereqs.value.push(Skill.get(id))
}

const submitUnlock = (id: string) => {
    unlocks.value.push(Skill.get(id))
}

</script>

<template>
<div class="editViewMain">
    <div class="leftSide">
        <div class="leftTop">
            <div class="iconPic"></div>
            <div class="mainInfo">
                <p class="subtitle mainInfoTitle">Name: {{ currSkill.name }}</p>
                <p class="subtitle description">Description: </p>
                <textarea id="descInput" cols="50" rows="10" :value></textarea>
            </div>
        </div>

        <div class="leftBottom">
            <div class="prereqsContainer">
                <p class="subtitle prereqsTitle">Prerequisites</p>
                <ul>
                    <li v-for="prereq in prereqs" class="skillListEntry">
                        {{ prereq.name }}
                        <span class="removeSkillButton" @click="removePrereq(prereq.name)">X</span>
                    </li>
                </ul>
                <form @submit.prevent="submitPrereq(newPrereqSkill)">
                    <input class="addSkillForm" type="text" placeholder="Add a skill!" v-model="newPrereqSkill"></input>
                </form>
            </div>

            <div class="unlocksContainer">
                <p class="subtitle unlocksTitle">Unlocks</p>
                <ul>
                    <li v-for="unlock in unlocks" class="skillListEntry">
                        {{ unlock.name }}
                        <span class="removeSkillButton" @click="removeUnlock(unlock.name)">X</span>
                    </li>
                </ul>
                <form @submit.prevent="submitUnlock(newUnlockSkill)">
                    <input class="addSkillForm" type="text" placeholder="Add a skill!" v-model="newUnlockSkill"></input>
                </form>
            </div>
        </div>
    </div>

    <div class="resources">
        <p class="subtitle resourcesTitle"></p>>
    </div>
</div>
</template>

<style scoped lang="scss">
@font-face{
  font-family: "Press Start";
  src: url("../assets/fonts/PressStart2P-Regular.ttf");
}

* {
    font-family: 'Press Start';
}

.editViewMain {
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
}

.prereqsContainer {
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

</style>