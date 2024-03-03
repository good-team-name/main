<script setup lang="ts">
const props = defineProps(['x1', 'y1', 'x2', 'y2'])


</script>

<template>
    <svg>
        <line :x1="x1" :y1="y1" :x2="x2" :y2="y2" style="stroke:black ;stroke-width:2"/>
    </svg>
</template>



<style>
</style>