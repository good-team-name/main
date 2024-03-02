<script setup lang="ts">
import {Skill} from "../API"


import SmallSkill from '../components/SmallSkill.vue';
import { SkillBig } from '../types';
import { useRouter } from 'vue-router';

defineProps<{
    skill: SkillBig
}>();



const router = useRouter();



</script>

<template>
    <div class="skillViewFinder">
        <div class="left-side">


            <div></div>
            <div class="upNext">

                <div class="containerNext" v-for="postReq in Skill.getPre(skill.id)">
                    
                    <SmallSkill class="skillLink" @click="router.push(`/skill/${postReq.id}`)" :skill="postReq">
                    </SmallSkill>
                    <div class="middleLineSmall"></div>


                </div>



            </div>
        </div>


        <div class="overlay">

            <div class="middleLine"></div>
            <div class="image" :style="`background-image: url(${skill.iconUrl});`"></div>
            <h1>{{ skill.name }}</h1>


        </div>

        <div class="right-side">

            <div ></div>
            <div class="upNext">

                <div class="containerNext" v-for="postReq in Skill.getPost(skill.id)">
                    <div class="middleLineSmall"></div>
                    <SmallSkill class="skillLink" @click="router.push(`/skill/${postReq.id}`)" :skill="postReq">
                    </SmallSkill>
                 


                </div>



            </div>



        </div>

    </div>


</template>

<style scoped lang="scss">

.skillViewFinder {
    height: 100%;
    width: 100vw;
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

}

.middleLineSmall {
    width:200px;

    border: 1px dashed white;
    
}

.left-side,
.right-side {

    width: 37vw;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 25% 50% 25%;

    .upNext {
        display: flex;

        flex-direction: column;
        justify-content: space-evenly;

        .containerNext {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
    }
}

.left-side > .upNext {
    border-right: 3px solid white;
    align-items: flex-end;


}


.right-side > .upNext {
    border-left: 3px solid white;
    align-items: flex-start;


}



.skillLink {
    // width: 100px;
    background-color: white;
    color: black;
    border-radius: 10px;
}






.underlay {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.overlay {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 22px;



    height: 100%;
    width: 100%;

    h1 {
        font-size: 30px;
        text-decoration: underline;
        position: absolute;
        bottom: 30px;
    }

    .image {
        width: 140px;
        height: 140px;

        background-size: cover;

        border-radius: 100px;
    }

    .middleLine {
        position: absolute;
        height: 10px;
        width: 100%;
        background-color: white;

        z-index: -1;
    }
}</style>