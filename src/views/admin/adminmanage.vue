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
    <div class="result_search">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-button type="primary" style="width:100px;margin-left: 50px">批量添加</el-button>
        <el-button type="success" style="width:100px;margin-left: 50px">删除</el-button>
        <el-button type="info" style="width:150px;margin-left: 50px">导出管理员数据</el-button>
        <el-form-item style="margin-left: 300px">
          <el-input v-model="formInline.major" placeholder="用户名" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item style="margin-left: 30px;width: 100px">
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
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
            align="center"
            label="序号"
            type="index"
            width="55">
        </el-table-column>
        <el-table-column
            align="center"
            prop="username"
            label="用户名"
            width="300">
        </el-table-column>
        <el-table-column
            align="center"
            prop="password"
            label="密码"
            width="300">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <el-button
              style="margin: auto"
              type="primary"
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">操作
          </el-button>
        </el-table-column>
      </el-table>
    </div>
    <div class="block pages">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          style="margin-left: 20%">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "adminmanage",
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
        username: "李世良",
        password: "1234",
      }, {
        username: "李世良",
        password: "1234",
      }, {
        username: "李世良",
        password: "1234",
      }, {
        username: "李世良",
        password: "1234",
      }, {
        username: "李世良",
        password: "1234",
      }, {
        username: "李世良",
        password: "1234",
      }, {
        username: "李世良",
        password: "1234",
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
.result_search {
  margin-left: 0px;
}

.result_table {
  margin-top: 20px;
}

.pages {
  margin-left: 50px;
  margin-top: 10px;
}
</style>