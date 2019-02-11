<template>
  <div class="main">
    <header class="head">
      <img class="reback" src="../assets/reback.png" @click="reback">
      通知
    </header>
    <div class="content">
      <p class="title">标题是什么我也不知道反正是一个重要的通知{{title}}</p>
      <p class="maincontent">这里是主要内容这里是主要内容这里是主要内容这里是主要内容这里是主要内容这里是主要内容这里是主要内容这里是主要内容{{content}}</p>
      <p class="time">发布于 2018{{year}}/03{{month}}/19{{date}}</p>
    </div>
    <Navigation :tagid="3"></Navigation>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
  name: 'NoticeDetail',
  data () {
    return {
      title: '',
      year: '',
      month: '',
      date: '',
      content: ''
    }
  },
  components: {
    Navigation
  },
  created() {
    var param = this.$route.query.noticeId;
    var _this = this;

  },
  methods: {
    reback: function() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  font-size: 0.52rem;
  /* background-color: #f4f4f4; */
  background-color: #fff;
}

.head {
  position: relative;
  width: 100%;
  padding: 0.28rem 0;
  border-bottom: 1px solid #ebebeb;
  color: #f39839;
  background-color: #fff;
}

.reback {
  position: absolute;
  top: 0.42rem;
  left: 0.36rem;
  width: 0.5rem;
}

.content {
  padding: 0.6rem;
  text-align: left;
}

.title {
  padding-bottom: 0.7rem;
  font-size: 0.6rem;
  font-weight: bold;
  letter-spacing: 1px;
  color: #303133;
}

.maincontent {
  letter-spacing: 1px;
  font-size: 0.56rem;
}

.time {
  padding: 0.5rem 0;
  font-size: 0.46rem;
  color: #909399;
  text-align: right;
}
</style>
