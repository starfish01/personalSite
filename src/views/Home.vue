<template>
  <div class="home">
    <img class="icon-me" alt="Vue logo" src="../assets/logo.png">
    <HomeComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponent from '@/components/HomeComponent.vue'

export default {
  name: 'home',
  components: {
    HomeComponent
  }
}
</script>

<style>

.icon-me {
    border-radius: 50%;
    border-color: #00bbff;
    border-width: 10px;
    border-style: solid;
}

</style>

