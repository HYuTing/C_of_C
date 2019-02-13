<template>
  <div class="main">
    <MyTop></MyTop>
    <MyNav :navid="'1'"></MyNav>
    <div class="container">用户管理</div>
  </div>
</template>

<script>
import MyTop from "./top.vue"
import MyNav from "./nav.vue"

export default {
  name: 'AdminUser',
  data () {
    return {

    }
  },
  components: {
    MyTop,
    MyNav
  },
  methods: {
    Login: function() {

    }
  }
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
}

.container {
  padding-top: 70px;
  padding-left: 220px;
  text-align: left;
}

</style>
