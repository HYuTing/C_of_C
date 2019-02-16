<template>
  <div class="main">
    管理员端开始啦啦
    <button @click="Login">
      登 录
    </button>
  </div>
</template>

<script>
export default {
  name: 'AdminLogin',
  data () {
    return {

    }
  },

  methods: {
    Login: function() {
      this.$router.push("/admin/user_management");
    }
  }
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
}

</style>
