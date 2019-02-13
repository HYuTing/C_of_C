<template>
  <div class="container">
    <!--<div class="tab">
        <li :class="on === 1?'chosed':''" v-on:click="on=1"><router-link  to="/">通讯录检索</router-link></li>
        <li :class="on === 2?'chosed':''" v-on:click="on=2"><router-link  to="/detail">付款信息</router-link></li>
        <li :class="on === 3?'chosed':''" v-on:click="on=3"><router-link  to="/user">签到信息</router-link></li>
    </div>-->
    <el-container>
      <el-aside style="background-color: #fff; width:200px;">
        <el-menu :default-openeds="['1', '6']">
          <router-link  to="/user"><el-menu-item index="1">
            <template slot="title"><i class="el-icon-document"></i>用户管理</template>
          </el-menu-item></router-link>
          <router-link  to="/payment"><el-menu-item index="2">
            <template slot="title"><i class="el-icon-goods"></i>付款管理</template>
          </el-menu-item></router-link>
          <router-link to="/checkin"><el-menu-item index="3">
            <template slot="title"><i class="el-icon-circle-check-outline"></i>签到管理</template>
          </el-menu-item></router-link>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-star-on"></i>抽奖管理</template>
            <el-menu-item-group>
              <router-link to="/raffle"><el-menu-item index="3-1">抽奖码与奖品</el-menu-item></router-link>
              <router-link to="/raffle2"><el-menu-item index="3-2">抽奖</el-menu-item></router-link>
            </el-menu-item-group>
          </el-submenu>
          <router-link  to="/message"><el-menu-item index="5" >
            <template slot="title"><i class="el-icon-message"></i>发布消息</template>
          </el-menu-item></router-link>
          <router-link  to="/delete"><el-menu-item index="6">
            <template slot="title"><i class="el-icon-delete"></i>清空记录</template>
          </el-menu-item></router-link>
        </el-menu>
      </el-aside>
    </el-container>

  </div>
</template>

<script>
export default {
  name: "MyHeader",
  data() {
    return {
      on: 1,
      login: 0
    };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: flex-start;
}


li {
  text-align: left;
}

a {
  color: #303133;
  text-decoration: none;
}

</style>
