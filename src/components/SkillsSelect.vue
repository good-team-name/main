<script setup lang="ts">
import { Ref, computed, onMounted, ref } from 'vue';
import { SkillBig, SkillSmall } from '../types';
import { Skill } from '../API';
import SkillSmallSearch from './SkillSmallSearch.vue';

const props = defineProps<{
    modelValue: Array<SkillSmall>,
}>()

const searchTerm = ref("");

const recordOfSkills: Ref<Record<string, SkillSmall>> = ref({});

const filteredSkills = computed(() => {
    return Object.keys(recordOfSkills.value).filter(name => name.toLocaleLowerCase().includes(searchTerm.value.toLocaleLowerCase())).map((name) => recordOfSkills.value[name])
})

const emit = defineEmits<{
    "update:modelValue": [Array<SkillSmall>]
}>()

const _skillsSelected = computed({
    get() {
        return props.modelValue
    },
    set(val) {
        emit('update:modelValue', val)
    }
})

const getAllSkills = async () => {
    recordOfSkills.value = await Skill.getAll();
}

onMounted(() => {
    getAllSkills();

})

const inArr = (skill: SkillSmall) => {
    return _skillsSelected.value.map(s => s.id).includes(skill.id)
}
const removeArr = (skill: SkillSmall) => {
    _skillsSelected.value = _skillsSelected.value.filter(s => s.id != skill.id);
}

const toggleSkill = (skill: SkillSmall) => {
    if (inArr(skill)) {
        removeArr(skill)

    } else {
        _skillsSelected.value.push(skill);

    }
}

</script>

<template>

    <div class="searchBox"> <input v-model="searchTerm" placeholder="search"></div>
    <div v-for="skill in filteredSkills" class="skillSelect">
        <SkillSmallSearch :skill="skill">
        </SkillSmallSearch>
        <input type="checkbox" :checked="inArr(skill)" @click="toggleSkill(skill)">

    </div>


</template>

<style scoped lang="scss">
.skillSelect {
    display: flex;
    margin: 5px;

    input {
        margin-left: 10px;

    }
}
</style>