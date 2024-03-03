<script setup lang="ts">
import { Ref, computed, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { User } from "../API"
import { UserBig } from '../types';


const route = useRoute();
const router = useRouter();

const idFromUrl: string = route.params.id as string;
const selectedID = ref("");
const loaded = ref(false);

const user: Ref<UserBig | undefined> = ref();

selectedID.value = idFromUrl;


const currRoute = computed(() => {
    return route.params.id as string;
})

const getUser = async () => {
    try {
        user.value = await User.get(currRoute.value);

    } catch (err) {
        user.value = undefined;

    }
    loaded.value = true;



}


onMounted(async () => {
    await getUser();



})


watch(selectedID, (id) => {
    selectedID.value = id;
    router.push({
        params: {
            id
        }
    })

    getUser()

})

watch(currRoute, () => {
    getUser()

})

</script>

<template>

<div class="userViewMain" v-if="user">
    <div class="userContainer">
        <div class="profilePicContainer">
            
        </div>  
        <div class="userName">
            Placeholder
        </div>
        <div class="userStatsContainer">
            <div class="userFriends">
                Friends:<br> <span class="stat">10</span>
            </div>
            <div class="userContributions">
                Contributions:<br> <span class="stat">10</span>
            </div>
        </div>
    </div>
</div>
 <div class="userView" v-if="!user">
        <div v-if="!loaded">
            <h1>Loading...</h1>
        </div>
        <div v-if="loaded">
            <h1>User with id: <br> [{{ selectedID }}] <br> not found</h1>
        </div>



    </div>
    
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

* {
    font-family: "Press Start 2P", system-ui;
    color: #F595CF;
}

.userViewMain {
    width: 100%;
    height: 100%;
    background-image: url('../assets/waterBG.png');
    background-size: cover; 
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
}

.userContainer {
    background-color: #2B2038;
    outline: 6px solid #FFCAEA;
    display: flex;
    flex-direction: column;
    padding: 50px;
    max-height: 500px;
}

.userStatsContainer {
    display: flex;
    flex-direction: row;
    gap: 50px;
}

.userName {
    font-size: 2rem;
    padding-bottom: 50px;
    text-align: center;
}

.userFriends, .userContributions {
    font-size: 1rem;
    width: 15em;
    height: 7em;    
    background-color: #43304B;
    padding: 1em;
    text-align: center;
}

.stat {
    font-size: 1.5rem;
}

</style>