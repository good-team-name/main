<script setup lang="ts">

</script>

<template>
  <div class="topbar">
    <div class="logo-image"></div>

  </div>
  <div class="main-content">
    <router-view />
  </div>
</template>

<style scoped lang="scss">
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


    background-image: url('./assets/logocolor.png');


    height: 100%;
    // background-color: red;
    width: 150px;

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
