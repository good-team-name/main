<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {User} from "../API"


const route = useRoute();
const router = useRouter();

const idFromUrl: string = route.params.id as string;
const selectedID = ref("");

selectedID.value = idFromUrl;


const currRoute = computed(() => {
    return route.params.id as string;
})

const user = computed(() => {
    return User.get(currRoute.value);
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
    {{ user }}
    
</template>

<style scoped lang="scss">

</style>