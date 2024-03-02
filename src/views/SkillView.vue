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


                <div class="resources">
                <h2>Prereqs</h2>

            </div>
            <div class="upNext">

                <div class="containerNext" v-for="postReq in getPrequesites(currRoute)">
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

        <div class="right-side" v-if="getUnlocked(currRoute).length >0">

            <div class="resources">
                <h2>Level Up!</h2>

            </div>
            <div class="upNext">

                <div class="containerNext" v-for="postReq in getUnlocked(currRoute)">
                    <div class="middleLineSmall"></div>
                    <SmallSkill class="skillLink" @click="router.push(`/skill/${postReq.id}`)" :skill="postReq">
                    </SmallSkill>


                </div>



            </div>



        </div>

    </div>
</template>

<style scoped lang="scss">
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
        justify-content: space-between;
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

.right-side {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 25% 50% 25%;

    .upNext {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
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
    position: relative;
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
        position: absolute;
        bottom: 30px;
    }

    .image {
        width: 200px;
        height: 200px;

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
}
</style>