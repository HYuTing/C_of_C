<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <div class="wrapper">
      <div class="box1"></div>
      <div class="box2"></div>
      <div class="box3"></div>
      <div class="box4"></div>
      <div class="box5"></div>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>

<style scoped>
.wrapper div {
  height: 1rem;
}
.box1 {
  width: 2rem;
  background-color: coral;
}
.box2 {
  width: 4rem;
  background-color: skyblue;
}
.box3 {
  width: 6rem;
  background-color: palegreen;
}
.box4 {
  width: 8rem;
  background-color: wheat;
}
.box5 {
  width: 10rem;
  background-color: darkred;
}
</style>
