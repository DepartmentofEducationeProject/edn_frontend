<template>
  <div>
    <div style="margin-bottom: 50px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="progress_title">
      <el-button class="progress_button">评审进度</el-button>
    </div>
    <div class="progress_table">
      <el-table
          ref="singleTable"
          :data="tableData"
          border
          highlight-current-row
          @current-change="handleCurrentChange"
          style="width: 100%;text-align: center">
        <el-table-column
            label="序号"
            type="index"
            width="80">
        </el-table-column>
        <el-table-column
            property="expName"
            label="专家用户名"
            width="200">
        </el-table-column>
        <el-table-column
            property="reviewNum"
            label="评审总数"
            width="160">
        </el-table-column>
        <el-table-column
            property="finishNum"
            label="已评审项目数"
            width="160">
        </el-table-column>
        <el-table-column
            property="notFinishNum"
            label="未评审项目数"
            width="160">
        </el-table-column>
        <el-table-column label="评审进展">
          <template slot-scope="scope">
            <el-button
                type="primary"
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">已提交
            </el-button>
          </template>
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
      tableData: [{
        expName: "李世良",
        reviewNum: "100",
        finishNum: "50",
        notFinishNum: "50",
      }, {
        expName: "李世良",
        reviewNum: "100",
        finishNum: "50",
        notFinishNum: "50",
      }, {
        expName: "李世良",
        reviewNum: "100",
        finishNum: "50",
        notFinishNum: "50",
      }, {
        expName: "李世良",
        reviewNum: "100",
        finishNum: "50",
        notFinishNum: "50",
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
</style>