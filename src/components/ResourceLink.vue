<script setup lang="ts">
import { Resource } from '../types';

defineProps<{
    resource: Resource

}>()

const emit = defineEmits<{

}>()



</script>

<template>
    <div class="resourceLink">
       <img :src="`https://s2.googleusercontent.com/s2/favicons?domain=${resource.url}&sz=256`">
        <a :href="resource.url">{{resource.name}}</a>
        
    </div>

</template>

<style scoped lang="scss">
.resourceLink {
    display: flex;
    // justify-content: center;
    align-items: center;
    background-color: $sc;
    img {
        width: 40px;
        height: 40px;
        margin-right: 10px;

    }
    a {
        color: white;

    }
}

</style>