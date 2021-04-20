<template>
  <div>
    <div style="margin-bottom: 50px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>管理员</el-breadcrumb-item>
        <el-breadcrumb-item>在线用户</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="result_table">
      <el-table
          ref="multipleTable"
          :data="tableData"
          border
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
        <el-table-column
            type="selection"
            width="55">
        </el-table-column>
        <el-table-column
            type="index"
            width="55">
        </el-table-column>
        <el-table-column
            align="center"
            prop="username"
            label="用户名"
            width="280">
        </el-table-column>
        <el-table-column
            align="center"
            prop="hostname"
            label="主机名"
            width="120">
        </el-table-column>
        <el-table-column
            align="center"
            prop="loginTime"
            label="登陆时间"
            show-overflow-tooltip>
        </el-table-column>
        <el-table-column
            align="center"
            prop="lastVisit"
            label="最后访问"
            width="200">
        </el-table-column>
        <el-table-column
            align="center"
            prop="outOfTime"
            label="过期时间"
            width="200">
        </el-table-column>
      </el-table>
    </div>

    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
    </el-pagination>

  </div>
</template>

<script>
export default {
  name: "onliner",
  data() {
    return {
      formInline: {
        depart: '',
        major: '',
      },
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      tableData: [{
        username: "西北工业大学_01",
        hostname: "127.0.0.1,",
        loginTime: "2021-04-07 15:31",
        lastVisit: "2021-04-07 15:31",
        outOfTime: "2021-04-07 15:31",
      }, {
        username: "西北工业大学_02",
        hostname: "127.0.0.1,",
        loginTime: "2021-04-07 15:31",
        lastVisit: "2021-04-07 15:31",
        outOfTime: "2021-04-07 15:31",
      }, {
        username: "西北工业大学_03",
        hostname: "127.0.0.1,",
        loginTime: "2021-04-07 15:31",
        lastVisit: "2021-04-07 15:31",
        outOfTime: "2021-04-07 15:31",
      }, {
        username: "西安交通大学_01",
        hostname: "127.0.0.1,",
        loginTime: "2021-04-07 15:31",
        lastVisit: "2021-04-07 15:31",
        outOfTime: "2021-04-07 15:31",
      }, {
        username: "西安交通大学_02",
        hostname: "127.0.0.1,",
        loginTime: "2021-04-07 15:31",
        lastVisit: "2021-04-07 15:31",
        outOfTime: "2021-04-07 15:31",
      }, {
        username: "西安交通大学_03",
        hostname: "127.0.0.1,",
        loginTime: "2021-04-07 15:31",
        lastVisit: "2021-04-07 15:31",
        outOfTime: "2021-04-07 15:31",
      }, {
        username: "西安电子科技大学_01",
        hostname: "127.0.0.1,",
        loginTime: "2021-04-07 15:31",
        lastVisit: "2021-04-07 15:31",
        outOfTime: "2021-04-07 15:31",
      }, {
        username: "西安电子科技大学_02",
        hostname: "127.0.0.1,",
        loginTime: "2021-04-07 15:31",
        lastVisit: "2021-04-07 15:31",
        outOfTime: "2021-04-07 15:31",
      }, {
        username: "西安电子科技大学_03",
        hostname: "127.0.0.1,",
        loginTime: "2021-04-07 15:31",
        lastVisit: "2021-04-07 15:31",
        outOfTime: "2021-04-07 15:31",
      }],
      multipleSelection: []
    }
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    onSubmit() {
      console.log('submit!');
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
}
</script>

<style scoped>
.result_table {
  margin-top: 20px;
  height: 550px;
  overflow-y: auto;
}

.el-pagination {
  text-align: center;
  margin-top: 10px;
}
</style>