<template>
  <div>
    <div style="margin-bottom: 50px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>管理员</el-breadcrumb-item>
        <el-breadcrumb-item>管理员用户管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="result_search">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-button type="primary" style="width:100px;margin-left: 120px">批量添加</el-button>
        <el-button type="success" style="width:100px;margin-left: 50px">删除</el-button>
        <el-button type="info" style="width:150px;margin-left: 50px">导出管理员数据</el-button>
        <el-form-item style="margin-left: 150px">
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
          style="width: 80%;margin-left: 10%"
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
            label="删除"
            width="300">
          <el-button type="danger" size="mini" @click="open_del">删除</el-button>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <el-button
              style="margin: auto"
              type="primary"
              size="mini" @click="toggleModal">编辑
          </el-button>
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
    <Modal v-show="showModal" v-on:closeme="closeme"></Modal>
  </div>
</template>

<script>
import Modal from "../../components/college/Modal";

export default {
  name: "adminmanage",
  components: {Modal},
  data() {
    return {
      showModal: false,
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
        username: "李忠良",
        password: "1234",
      }, {
        username: "李晓亮",
        password: "1234",
      }, {
        username: "李大亮",
        password: "1234",
      }, {
        username: "李巨良",
        password: "1234",
      }, {
        username: "陈军正",
        password: "1234",
      }, {
        username: "陈军歪",
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
    },
    toggleModal: function () {
      this.showModal = !this.showModal;
    },
    closeme: function () {
      this.showModal = !this.showModal;
    },
    open_del() {
      this.$confirm('此操作将删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
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

.el-pagination {
  text-align: center;
  margin-top: 20px;
}
</style>