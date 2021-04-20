<template>
  <div>
    <div style="margin-bottom: 50px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>管理员</el-breadcrumb-item>
        <el-breadcrumb-item>评审进度</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="progress_title">
      <el-button class="progress_button">评审进度</el-button>
    </div>
    <!--    <div class="result_search">-->
    <!--      <el-form :inline="true" :model="formInline" class="demo-form-inline">-->
    <!--        <el-form-item label="专业所在单位">-->
    <!--          <el-input v-model="formInline.depart" placeholder="专业所在单位"></el-input>-->
    <!--        </el-form-item>-->
    <!--        <el-form-item label="一流专业名称">-->
    <!--          <el-input v-model="formInline.major" placeholder="一流专业名称"></el-input>-->
    <!--        </el-form-item>-->
    <!--        <el-form-item>-->
    <!--          <el-button type="primary" style="margin-left: 50px">查询</el-button>-->
    <!--        </el-form-item>-->
    <!--      </el-form>-->
    <!--    </div>-->
    <div class="progress_table">
      <el-table
          ref="singleTable"
          :data="tableData"
          height="350px"
          border
          highlight-current-row
          @current-change="handleCurrentChange"
          style="overflow-y: auto">
        <el-table-column
            align="center"
            label="序号"
            type="index"
            width="80">
        </el-table-column>
        <el-table-column
            align="center"
            property="expName"
            label="专家用户名"
            width="200">
        </el-table-column>
        <el-table-column
            align="center"
            property="reviewNum"
            label="评审总数"
            width="160">
        </el-table-column>
        <el-table-column
            align="center"
            property="finishNum"
            label="已评审项目数"
            width="160">
        </el-table-column>
        <el-table-column
            align="center"
            property="notFinishNum"
            label="未评审项目数">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "reviewprogress",
  data() {
    return {
      formInline: {
        depart: '',
        major: '',
      },
      tableData: [{
        expName: "李世良",
        reviewNum: "100",
        finishNum: "50",
        notFinishNum: "50",
      }, {
        expName: "李忠良",
        reviewNum: "72",
        finishNum: "53",
        notFinishNum: "19",
      }, {
        expName: "李大亮",
        reviewNum: "85",
        finishNum: "59",
        notFinishNum: "26",
      }, {
        expName: "李晓亮",
        reviewNum: "130",
        finishNum: "80",
        notFinishNum: "50",
      }, {
        expName: "陈军正",
        reviewNum: "198",
        finishNum: "187",
        notFinishNum: "11",
      }, {
        expName: "陈军歪",
        reviewNum: "63",
        finishNum: "50",
        notFinishNum: "13",
      }, {
        expName: "陈康达",
        reviewNum: "63",
        finishNum: "50",
        notFinishNum: "13",
      }],
      currentRow: null
    }
  },

  methods: {
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    }
  }
}
</script>

<style scoped>
.progress_title {
  margin-top: 50px;
  margin-left: 10%;
}

.progress_table {
  margin-top: 50px;
  width: 80%;
  margin-left: 10%;
}

.progress_button {
  font-size: 30px;
}

.result_search {
  margin-left: 10%;
  margin-top: 50px;
}
</style>