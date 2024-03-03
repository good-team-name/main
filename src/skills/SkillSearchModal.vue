<script setup lang="ts">
import { Ref, computed, onMounted, ref } from 'vue';
import { SkillSmall, UserSmall } from '../types';
import { Skill } from '../API';

const allSkills: Ref<Array<SkillSmall>> = ref([]);

onMounted(async () => {
    let a = await Skill.getAll();
    for (let skill of a) {
        allSkills.value.push(skill);
    }

})

const props = defineProps<{
    modelValue: string
}>()

const emit = defineEmits<{
    "update:modelValue": [string]
}>()


const _value = computed({
    get() {
        return props.modelValue
    },
    set(val) {
        emit('update:modelValue', val)
    }
})



</script>

<template></template>

<style scoped lang="scss"></style>