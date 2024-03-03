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

watch(currRoute, (id) => {
    getUser()

})

</script>

<template>
    <div class="userView" v-if="user">


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
.userView {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Press Start 2P", system-ui;
    text-align: center;
}
</style>