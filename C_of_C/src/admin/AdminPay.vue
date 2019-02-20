<template>
  <div class="main">
    <MyTop></MyTop>
    <MyNav :navid="'2'"></MyNav>
    <div class="container">
      <div class="container-left">
        <div class="search-div">
          <el-select style="width:180px;" v-model="value" placeholder="选择排序方式">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-input prefix-icon="el-icon-search" v-model="input" placeholder="请输入姓名"></el-input>
          <el-button type="primary" icon="el-icon-search" @click="search()" class="search-btn">搜索</el-button>
        </div>
        <p class="box-card1">付款用户列表</p>
        <el-table
        :data="tableData"
        stripe
        style="width: 100%;"
        height="450">
          <el-table-column align="center" prop="number" label="序号" width="60"></el-table-column>
          <el-table-column align="center" prop="name" label="姓名" width="90"></el-table-column>
          <el-table-column align="center" prop="native_place" label="原籍" width="120"></el-table-column>
          <el-table-column align="center" prop="money" label="金额 (元)"></el-table-column>
          <el-table-column align="center" label="修改金额" width="120">
            <template slot-scope="scope">
              <el-button
                @click="revise(scope.row)"
                icon="el-icon-edit"
                size="medium">
              </el-button>
            </template>
        </el-table-column>
        </el-table>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="8"
            layout="prev, pager, next, jumper"
            :total="totalnum"
            background>
          </el-pagination>
        </div>
      </div>

      <div class="container-right">
        <div class="opera-div">
          <el-button type="primary" plain @click="dialogFormVisible = true">新增付款</el-button>
          <el-dialog title="添加付款用户" :visible.sync="dialogFormVisible" width="400px">
            <el-form :model="form">
              <el-form-item label="原籍："  :label-width="formLabelWidth">
                <el-cascader
                  expand-trigger="hover"
                  :options="region"
                  v-model="form.region1"
                  @change="handleChange">
                </el-cascader>
              </el-form-item>
              <el-form-item label="姓名：" :label-width="formLabelWidth">
                <el-input v-model="form.name" style="width:220px"></el-input>
              </el-form-item>
              <el-form-item label="金额：" :label-width="formLabelWidth">
                <el-input v-model="form.money" style="width:220px"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="cancel()">取 消</el-button>
              <el-button type="primary" @click="confirm()">确 定</el-button>
            </div>
          </el-dialog>

          <el-button type="success" plain style="position: absolute; right: 0;">生成排行榜</el-button>
        </div>
        <div v-for="(item, index) in countList" v-bind:key="index" class="box-card2">
          <span>{{item.name}}</span>
          <div class="rule"></div>
          <h4>总金额：{{item.money}}元</h4>
          <h4>总人数：{{item.people}}人</h4>
        </div>
      </div>

    </div>

  </div>

</template>

<script>
import MyTop from "./top.vue"
import MyNav from "./nav.vue"

export default {
  name: 'AdminPay',
  data () {
    return {
      dialogFormVisible: false,
      form: {
        region1: '',
        region2: '',
        name: '',
        money: '',
      },
      formLabelWidth: '70px',
      options: [
        {
          value: "选项1",
          label: "山亭"
        },
        {
          value: "选项2",
          label: "忠门"
        },
        {
          value: "选项3",
          label: "东浦"
        },
        {
          value: "选项4",
          label: "月塘"
        }
      ],
      region: [
        {
          value: "选项1",
          label: "山亭",
          children:[{label:'西乌垞'},{label:'东乌垞'},{label:'新乌垞'},{label:'山柄'},{label:'东店'},{label:'西埔'},{label:'西埔口'},{label:'山亭'},{label:'蒋山'},{label:'利山'},{label:'港里'},{label:'西前'},{label:'莆禧'},{label:'东仙'},{label:'文甲'}],
        },
        {
          value: "选项2",
          label: "忠门",
          children:[{label:'后坑'},{label:'安柄'},{label:'柳厝'},{label:'沁头'},{label:'秀华'},{label:'秀田'},{label:'秀前'},{label:'琼山'},{label:'忠门'},{label:'王厝'},],
        },
        {
          value: "选项3",
          label: "东浦",
          children:['何山','东坑','前范','度口','东埔','下坑','塔林','乐屿','西山','度下','梯亭','吉成','东吴'],
        },
        {
          value: "选项4",
          label: "月塘",
          children:['东潘','洋埭','砺山','岱(蚮)前','前康','西园','双告山','月埔','霞塘','坂尾','联星']
        }
      ],
      value: '',
      input: '',
      tableData: [
        {
          number: "1",
          name: "王小虎",
          native_place: "忠门镇忠门村",
          money:"1000"
        },
        {
          number: "2",
          name: "王小虎",
          native_place: "忠门镇忠门村",
          money:"1000"
        }
      ],
      currentPage3: 1,
      totalnum: 300,
      countList: [
        {
          name: '忠门籍',
          money: 100000,
          people: 1000
        },
        {
          name: '山亭镇',
          money: 10000,
          people: 1000
        },
        {
          name: '忠门镇',
          money: 9000,
          people: 1000
        },
        {
          name: '东浦镇',
          money: 9000,
          people: 1000
        },
        {
          name: '月塘镇',
          money: 8000,
          people: 999
        }
      ]
    }
  },
  components: {
    MyTop,
    MyNav
  },
  methods: {
    form_reset(){
      this.form.region1=""
      this.form.region2=""
      this.form.name=""
      this.form.money=""
    },
    confirm(){
      this.form_reset()
      this.dialogFormVisible = false
    },
    cancel(){
      this.form_reset()
      this.dialogFormVisible = false
    },
    search(){
      alert("123");
    },
    revise: function(row) {
      this.$prompt("您正在为用户 " + row.name + " 修改捐款金额：", "修改金额", {
        inputPlaceholder: '捐款金额',
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
      .then(({ value }) => {
        // value值就是input的value
        this.$message({
          type: "success",
          message: "修改成功！"
        });
      })
      .catch(() => {
        this.$message({
          type: "info",
          message: "取消输入"
        });
      });
    },
    addnew() {
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
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
  display: flex;
  min-width: 860px;
  padding-top: 70px;
  padding-left: 220px;
  text-align: left;
  background-color: #f4f4f4;
}

.container-left{
  flex: 1 1 auto;
  width: 100%;
  min-width: 600px;
}

.search-div {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 40px;
}

.search-btn {
  margin-left: 15px;
}

.box-card1 {
  padding: 11px 20px;
  margin: 15px 0;
  border-radius: 3px;
  font-size: 14px;
  background: #fff;
}

.block {
  margin: 20px auto;
  text-align: center;
}

.box-card3 {
  line-height: 24px;
  padding: 10px 20px;
  margin: 15px 0;
  border-radius: 2px;
  font-size: 14px;
  background: #fff;
}

.container-right{
  width: 224px;
  margin: 0 20px;
}

.opera-div {
  position: relative;
}

.box-card2{
  width: 200px;
  height: 96px;
  padding: 10px 12px;
  margin: 15px 0;
  border-radius: 3px;
  font-size: 14px;
  background-color: #fff;
}

.box-card2 span{
  display: block;
  font-weight: bold;
  padding-left: 5px;
  margin-bottom: 10px;
}

.rule{
  margin: 10px auto;
  height: 0px;
  width: 200px;
  border-bottom: 1px solid #BBBBBB;
}

.box-card2 h4 {
  display: block;
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  display: inline-block;
  margin-bottom: 7px;
  font-size: 14px;
}
</style>
