<template>
  <div class="main">
    <header class="head">消息列表</header>
    <ul class="noticeList">
      <li v-for="item in noticeList" v-bind:key="item.id" class="notice" @click="toDetail(item.id)">
        <p class="notice-title">标题是{{item.title}}</p>
        <p class="notice-time">{{num(1)}}/{{item.month}}/{{item.date}}</p>
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
      noticeList: [
        {
          id: 0,
          title: '黄乐兴是猪',
          year: '2019',
          month: '02',
          date: '11'
        },
      ]
    }
  },
  components: {
    Navigation
  },
  methods: {
    toDetail: function() {
      var _this = this;
      this.$getToken();
      if(this.$getToken()) {
        this.$router.push({
          path: "/NoticeDetail",
          query: {
            noticeId: 1
          }
        });
      }
    },
    num: function(n) {
      console.log(n);
      return n;
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
  font-size: 0.6rem;
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
  top: 0.42rem;
  right: 0.16rem;
  font-size: 0.44rem;
  color: #909399;
}
</style>
