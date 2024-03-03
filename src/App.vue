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

    <div class="nav">
      <div class="navLink" @click="router.push('/')">Home</div>
      <div class="navLink" @click="router.push('/skill')">Skills</div>
      <div class="navLink" @click="router.push('/path')">Paths</div>

    </div>


    <div @click="router.push(`/user/${userStore.user_data.id}`)"
      :style="`background-image: url(${userStore.user_data.iconUrl})`" class="userTopbar"
      v-if="userStore.user_data && userStore.loggedIn">
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
  width: 70px;
  height: 70px;
  position: fixed;
  right: 10px;
  // top: 10px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  &:hover {
    cursor: pointer;
  }


}

.topbar {
  // background-color: $sc;
  background: url('./assets/topbar.png');
  background-size: cover;
  height: 14vh;
  align-items: center;
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

.nav {
  font-family: "Press Start 2P", system-ui;;
  display: flex;
  flex-direction: column;
}
</style>
