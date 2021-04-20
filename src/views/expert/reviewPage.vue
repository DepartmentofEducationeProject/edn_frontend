<template>
  <div>
    <div style="margin-bottom: 50px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>专家</el-breadcrumb-item>
        <el-breadcrumb-item>审批界面</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="basic">
      <div class="filearea">
        <img :src="imgFile" width="100%" alt=""/>

      </div>
      <div class="optionarea">
        <span>注意：每项的得分不超过最高分，评分为整数或一位小数</span>
        <el-table
            :data="tableData"
            border
            style="width: 80%;margin-left: 10%;margin-top: 10px">
          <el-table-column
              align="center"
              prop="type"
              label="评分标准"
              height="50"
              width="160">
          </el-table-column>
          <el-table-column
              align="center"
              prop="max"
              label="最高分"
              width="160">
          </el-table-column>
          <el-table-column
              align="center"
              label="得分">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </el-table-column>
        </el-table>
        <el-form
            style="width: 80%;margin-left: 10%;margin-top: 10px">
          <el-form-item label="评阅意见">
            <el-input type="textarea" :rows="5"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="back">保存打分</el-button>
        <el-button type="primary" @click="back">返回列表</el-button>
      </div>

    </div>
  </div>
</template>


<script>
import pdf from "vue-pdf";

export default {
  name: "reviewPage",
  components: {pdf},
  data() {
    return {
      imgFile: require('../../assets/test.jpg'),
      input: "",
      tableData: [{
        type: 'A',
        max: '50',
      }, {
        type: 'B',
        max: '30',
      }, {
        type: 'C',
        max: '20',
      }]
    };
  },
  methods: {
    back() {
      this.$router.replace('/notReviewed');
    }
  }
}
</script>

<style scoped>
.basic {
  display: flex;
  width: 1150px;
  height: 550px;
  background-color: rgba(251, 255, 246, 0.16);
  border: solid;
}

.filearea {
  width: 50%;
  height: 100%;
  overflow-y: auto;
  border-radius: 10px;
}

.optionarea {
  width: 50%;
  height: 100%;
  font-size: 20px;
  /*margin:  10px 20px;*/
  background: #eaeaea;
  border-radius: 10px;
}

.el-button {
  margin-left: 10%;
}
</style>