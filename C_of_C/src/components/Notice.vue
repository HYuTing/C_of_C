<template>
  <div class="main">
    <header class="head">消息列表</header>
    <ul class="noticeList">
      <li class="notice" @click="toDetail">
        <p class="notice-title">标题是什么我也不知道{{title}}</p>
        <p class="notice-time">2018{{year}}/03{{month}}/19{{date}}</p>
      </li>
    </ul>
    <Navigation :tagid="3"></Navigation>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
  name: 'Notice',
  data () {
    return {
      title: '',
      year: '',
      month: '',
      date: ''
    }
  },
  components: {
    Navigation
  },
  methods: {
    toDetail: function() {
      this.$router.push({
        path: "/NoticeDetail",
        query: {
          noticeId: 1
        }
      });
    }
  }
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

.noticeList {
  padding: 1.3rem 0.24rem;
  padding-bottom: 1.66rem;
  /* background-color: salmon; */
}

.notice {
  position: relative;
  padding: 0.34rem 0.16rem;
  padding-bottom: 0.38rem;
  background: #fff;
  border-bottom: 1px solid #ebebeb;
  list-style: none;
}

.notice-title {
  max-width: 6.8rem;
  text-align: left;
  font-weight: bold;
  letter-spacing: 1px;
  color: #303133;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.notice-time {
  position: absolute;
  top: 0.4rem;
  right: 0.16rem;
  font-size: 0.4rem;
  color: #909399;
}
</style>
