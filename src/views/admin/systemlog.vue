<template>
  <div>
    <div style="margin-bottom: 50px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>管理员</el-breadcrumb-item>
        <el-breadcrumb-item>系统日志</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="result_search">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-button type="primary" style="width:100px;margin-left: 50px">添加</el-button>
        <el-button type="success" style="width:100px;margin-left: 50px">删除</el-button>
        <el-form-item style="margin-left: 250px">
          <el-input v-model="formInline.major" placeholder="用户名" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item style="margin-left: 30px">
          <el-input v-model="formInline.major" placeholder="作者" style="width: 200px"></el-input>
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
            type="index"
            width="55">
        </el-table-column>
        <el-table-column
            prop="userid"
            label="用户id"
            width="120">
        </el-table-column>
        <el-table-column
            prop="username"
            label="用户名"
            width="120">
        </el-table-column>
        <el-table-column
            prop="option"
            label="操作"
            width="120">
        </el-table-column>
        <el-table-column
            prop="time"
            label="用时"
            width="200">
        </el-table-column>
        <el-table-column
            prop="method"
            label="方法"
            width="120">
        </el-table-column>
        <el-table-column
            prop="param"
            label="参数">
        </el-table-column>
        <el-table-column
            prop="ip"
            label="IP地址"
            width="120">
        </el-table-column>
        <el-table-column
            prop="createTime"
            label="创建时间"
            width="200">
        </el-table-column>
        <el-table-column label="操作" show-overflow-tooltip>
          <el-button
              type="danger"
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">删除
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
          :total="400" style="margin-left: 20%">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "systemlog",
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
        username: "西北工业大学",
        userid: "140001",
        option: "Post",
        method: "Post",
        time: "2021-04-09 16:42",
        param: "id=5",
        ip: "127.0.0.1",
        createTime: "2021-04-09 16:42",
      }, {
        username: "西北工业大学",
        userid: "140001",
        option: "Post",
        method: "Post",
        time: "2021-04-09 16:42",
        param: "id=5",
        ip: "127.0.0.1",
        createTime: "2021-04-09 16:42",
      }, {
        username: "西北工业大学",
        userid: "140001",
        option: "Post",
        method: "Post",
        time: "2021-04-09 16:42",
        param: "id=5",
        ip: "127.0.0.1",
        createTime: "2021-04-09 16:42",
      }, {
        username: "西北工业大学",
        userid: "140001",
        option: "Post",
        method: "Post",
        time: "2021-04-09 16:42",
        param: "id=5",
        ip: "127.0.0.1",
        createTime: "2021-04-09 16:42",
      }, {
        username: "西北工业大学",
        userid: "140001",
        option: "Post",
        method: "Post",
        time: "2021-04-09 16:42",
        param: "id=5",
        ip: "127.0.0.1",
        createTime: "2021-04-09 16:42",
      }, {
        username: "西北工业大学",
        userid: "140001",
        option: "Post",
        method: "Post",
        time: "2021-04-09 16:42",
        param: "id=5",
        ip: "127.0.0.1",
        createTime: "2021-04-09 16:42",
      }, {
        username: "西北工业大学",
        userid: "140001",
        option: "Post",
        method: "Post",
        time: "2021-04-09 16:42",
        param: "id=5",
        ip: "127.0.0.1",
        createTime: "2021-04-09 16:42",
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