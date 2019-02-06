<template>
  <div class="main">
    <header class="head">消息通知</header>

    <Navigation :tagid="3"></Navigation>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
  name: 'AddrList',
  data () {
    return {
      msg: ''
    }
  },
  components: {
    Navigation
  },
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  font-size: 0.52rem;
}

.head {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0.28rem 0;
  border-bottom: 1px solid #ebebeb;
  color: #f39839;
  background-color: #fff;
  z-index: 99;
}
</style>
