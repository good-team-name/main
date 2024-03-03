<script setup lang="ts">
import { db, smallify } from "../tempDb"
import {  SkillSmall, UserBig, SkillBig } from "../types";
import { ref, render, onMounted } from 'vue';
import skillNode from '../components/SkillNode.vue';
import skillEdge from '../components/SkillEdge.vue';


let counts = []
function findCount(s) {
    counts = []
    const visited = [];
    let count = -1
    dfs(visited, s, count);
    return Math.max(...counts)
}

function dfs(visited, curr, count) {
    visited.push(curr);
    count++
    if (curr.preSkills.length === 0) {
        counts.push(count)
    }

    for (const child of curr.preSkills) {
        curr = child
        if (!visited.includes(curr.name)) {
            const visitedCpy = [];
            for (let i = 0; i < visited.length; i++) {
                visitedCpy[i] = visited[i];
            }
            let countCpy = count
            dfs(visitedCpy, curr, countCpy);
        }
    }
}

let countTracker : Record<string, number> = {}

for (const skillID in db) {
    countTracker[skillID] = findCount(db[skillID])
}

console.log(countTracker)

// RENDERRR

let levelObj : Record<number, Array<string>> = {}
const renderRef = ref(levelObj)
for (let level = 0; level <= Math.max(...Object.values(countTracker)); level++) {
    for (const skill in countTracker) {
        if (countTracker[skill] === level) {
            if (!levelObj.hasOwnProperty(level)) {
                levelObj[level] = []
            }
            levelObj[level].push(skill) 
        }
    }
}

console.log(levelObj)

const clickHandler = () => {
    for (let i = 0; i <= Math.max(...Object.values(countTracker)); i++) {
        setTimeout(neaten, 100)
    }
}

const neaten = () => {
    console.log("A")
    let positionTrack : Record<string, number> = {}

    const keys = Object.keys(levelObj)
    for (let i = keys.length - 1; i >= 0; i--) {
        positionTrack = {}
        const currLevel = Number(keys[i])
        for (const skillID of levelObj[currLevel]) {
            const currSkill = db[skillID]
            const currDiv = document.getElementById(skillID)
            let currDivPos = currDiv.getBoundingClientRect().y

            for (const postSkill of currSkill.postSkills) {
                currDivPos += document.getElementById(postSkill.id).getBoundingClientRect().y - currDivPos
            } 

            positionTrack[skillID] = currDivPos;
        }

        //change loc
        let sorted = [];
        for (const skill in positionTrack) {
            sorted.push([skill, positionTrack[skill]]);
        }
        sorted.sort((a,b) => {
            return a[1] - b[1]
        })
        
        for (let i = 0; i < levelObj[currLevel].length; i++) {
            renderRef.value[currLevel][i] = (sorted[i][0])
        }
    } 
}

const edges = ref([{}])
let edgeObj = {
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0
}
let willRender = false;

const renderLines = () => {
    edges.value = []

    for (const level in renderRef.value) {
        for (const skill of renderRef.value[level]) {
            const currDiv = document.getElementById(skill)
            for (const postReq of db[skill].postSkills) {
                const newObj = {}
                const targetDiv = document.getElementById(postReq.id)
                newObj.x1 =  currDiv.getBoundingClientRect().x;
                newObj.y1 =  currDiv.getBoundingClientRect().y;
                newObj.x2 =  targetDiv.getBoundingClientRect().x;
                newObj.y2 =  targetDiv.getBoundingClientRect().y;
                edges.value.push(newObj)
            }
        }
    } 
    
    willRender = true;
    console.log(edges)
}


onMounted(neaten)
onMounted(renderLines)



</script>

<template>
<div class="mainContainer">

    <div class="pathLevel" v-for="level in renderRef">
        <skillNode class="pathNode" v-for="skillID in level" :nodeName="db[skillID].name" :id="skillID"></skillNode>
    </div>

    
    
</div>
<skillEdge class="edge" v-if="willRender" v-for="edge in edges" :x1="edge.x1" :x2="edge.x2" :y1="edge.y1" :y2="edge.y2"></skillEdge>
</template>

<style>
button {
    width: 100px;
    height: 50px;
}

.edge {
    position:absolute;
}

.mainContainer {
    width: 100%;
    height: 100%;   
    display: flex;
    flex-direction: row;
}

.graph-svg {
  position: absolute;
  width: 100%;
  height: 100%;
}

.pathLevel {
    padding: 20px;
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
    border: 2px solid black;
    background-color: gray;
    width: 100%;
    height: 100%;
    justify-content: center;
    flex-wrap: wrap;
}

.pathNode {
    text-align: center;
    padding: 10px;
    color: black;
    background-color: white;
    border-radius: 30px;
    margin-bottom: 50px;
}
</style>