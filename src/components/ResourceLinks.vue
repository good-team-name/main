<script setup lang="ts">
import { Resource } from '../types';

const props = defineProps<{
    resource: Resource

}>()

const emit = defineEmits<{
}>()

</script>

<template>
    <div>
        {{resource.url}}
        
    </div>

</template>

<style scoped lang="scss">

</style>