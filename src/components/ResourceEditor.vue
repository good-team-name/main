<script setup lang="ts">
import { computed, ref } from 'vue';
import { Resource } from '../types';
import ResourceLink from './ResourceLink.vue';

const props = defineProps<{
    modelValue: Array<Resource>
}>()

const emit = defineEmits<{
    "update:modelValue": [Array<Resource>]
}>()

const url = ref("");
const name = ref("");
const desc = ref("");


const _resources = computed({
    get() {
        return props.modelValue
    },
    set(val) {
        emit('update:modelValue', val)
    }
})

const removeResource = (resourceUrl: string) => {
    _resources.value = _resources.value.filter((rs) => resourceUrl != rs.url)
}

const addResource = () => {
    _resources.value.push({
        url: url.value,
        name: name.value,
        description: desc.value
    })

    url.value = "";
    name.value = "";
    desc.value = "";
}

</script>

<template>
    <div class="resourceList">
        <div class="resource" v-for="resource in _resources">
            <ResourceLink :resource></ResourceLink>
            <div @click="removeResource(resource.url)">🗑️</div>
        </div>

        <div>
            <input placeholder="url" v-model="url">
            <input placeholder="name" v-model="name">
            <button @click="addResource()">ADD</button>

        </div>

    </div>

</template>

<style scoped lang="scss"></style>