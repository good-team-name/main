<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useUserStore } from './stores/User';
import { onMounted } from 'vue';

const router = useRouter();
const userStore = useUserStore();

onMounted(() => {
  userStore.init();
})




</script>

<template>
  <div class="topbar">
    <div @click="router.push('/')" class="logo-image"></div>
    <div class="userTopbar" v-if="userStore.loggedIn">
      
    </div>

  </div>
  <div class="main-content">
    <router-view />
  </div>
</template>

<style scoped lang="scss">
.userTopbar {
  background-color: white;
  border-radius: 100px;
  width: 100px;
  height: 100px;
  position: fixed;
  right: 10px;
  top: 10px;
}

.topbar {
  // background-color: $sc;
  background: url('./assets/topbar.png');
  background-size: cover;
  height: 14vh;
  // margin-bottom: 2vh;
  padding: 4px;
  display: flex;


  .logo-image {
    cursor: pointer;
    box-sizing: content-box;
    margin: 4px;


    background-image: url('./assets/logocolor.png');


    height: 10vh;
    // background-color: red;
    width: 15vh;

    &:hover {
      background: url('./assets/logobnw.png');
      animation: shake 0.6s;

      // transform: translateY(-2px);

      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;

    }

    background-position: center center;
    background-size:cover;
    background-repeat: no-repeat;

    // transition: 0.4s;

  }
}

.main-content {
  height: 86vh;
}
</style>
