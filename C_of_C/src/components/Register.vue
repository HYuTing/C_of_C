<template>
  <div class="main">
    签到
    <Navigation :tagid="2"></Navigation>
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
</style>
