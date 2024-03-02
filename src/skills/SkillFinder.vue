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


            <div class="resources" v-if="Skill.getPre(skill.id).length > 0" >
                <h2>Prereqs</h2>
            </div>
            <div v-else></div>
            <div class="upNext">

                <div class="containerNext" v-for="postReq in Skill.getPre(skill.id)">
                    <div class="middleLineSmall"></div>
                    <SmallSkill class="skillLink" @click="router.push(`/skill/${postReq.id}`)" :skill="postReq">
                    </SmallSkill>


                </div>



            </div>
        </div>


        <div class="overlay">

            <div class="middleLine"></div>
            <div class="image" :style="`background-image: url(${skill.iconUrl});`"></div>
            <h1>{{ skill.name }}</h1>


        </div>

        <div class="right-side">

            <div v-if="Skill.getPost(skill.id).length > 0" class="resources">
                <h2>Level Up!</h2>

            </div>
            <div v-else></div>
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
.resources {
    // background-color: $sc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.left-side,
.right-side {
    // background-color: red;
    width: 37vw;

}


.left-side {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 25% 50% 25%;

    .upNext {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        // background-color: red;


        border-right: 3px solid white;
        // background-color: $sc;

        .containerNext {
            // transform: translateY(-50%);
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            

            .middleLineSmall {
                // background-color: white;
                z-index: -1;
                right: -200px;
                position: absolute;
                width: 300px;
                height: 0px;
                border-top: 3px dotted white;
            }

            background-color: white;
            color: black;
            border-radius: 10px;




        }
    }


}


.skillLink {
    width: 80px;
}
.right-side {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 25% 50% 25%;

    .upNext {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        // background-color: red;


        border-left: 3px solid white;
        // background-color: $sc;

        .containerNext {
            // transform: translateY(-50%);
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;

            .middleLineSmall {
                // background-color: white;
                z-index: -1;
                left: -200px;
                position: absolute;
                width: 300px;
                height: 0px;
                border-top: 3px dotted white;
            }

            background-color: white;
            color: black;
            border-radius: 10px;




        }
    }


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