<template>
  <div>
    <div style="margin-bottom: 50px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>学校</el-breadcrumb-item>
        <el-breadcrumb-item>学员用户管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="result_search">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-button type="primary" style="width:100px;margin-left: 50px">刷新</el-button>
        <el-button type="success" style="width:100px;margin-left: 50px">切换</el-button>
        <el-button type="info" style="width:150px;margin-left: 50px">导出评审结果</el-button>
        <el-form-item style="margin-left: 200px">
          <el-input v-model="formInline.major" placeholder="学院名称" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item style="margin-left: 30px;width: 100px">
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <di>
      <span class="school_tips">注：双击表格某行可查看学院申报人和申报专业</span>
    </di>
    <div class="result_table">
      <el-table
          ref="multipleTable"
          :data="tableData"
          border
          tooltip-effect="dark"
          style="width: 100%;border: solid"
          @selection-change="handleSelectionChange">
        <el-table-column
            label="选中"
            align="center"
            type="selection"
            width="60">
        </el-table-column>
        <el-table-column
            align="center"
            label="编号"
            type="index"
            width="60">
        </el-table-column>
        <el-table-column
            align="center"
            prop="collegeName"
            label="学院名称"
            width="200">
        </el-table-column>
        <el-table-column
            align="center"
            prop="username"
            label="用户名"
            width="180">
        </el-table-column>
        <el-table-column
            align="center"
            prop="mail"
            label="邮箱"
            width="200">
        </el-table-column>
        <el-table-column
            align="center"
            prop="tel"
            label="手机号码"
            width="200">
        </el-table-column>
        <el-table-column
            label="状态"
            align="center">
          <template slot-scope="scope">
            <el-button
                type="success"
                size="mini">正常
            </el-button>
          </template>
        </el-table-column>
        <el-table-column
            label="操作"
            align="center">
          <el-button type="primary" size="mini" @click="toggleModal()">编辑</el-button>
        </el-table-column>
        <el-table-column
            align="center"
            label="删除">
          <el-button type="danger" size="mini" @click="open_del">删除</el-button>
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
  name: "college_user_management",
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
        collegeName: "软件学院",
        username: "user_1",
        mail: "123@edu.cn",
        tel: "17458645214"
      }, {
        collegeName: "软件学院",
        username: "user_2",
        mail: "123@edu.cn",
        tel: "17458645214"
      }, {
        collegeName: "软件学院",
        username: "user_3",
        mail: "123@edu.cn",
        tel: "17458645214"
      }, {
        collegeName: "软件学院",
        username: "user_4",
        mail: "123@edu.cn",
        tel: "17458645214"
      }, {
        collegeName: "软件学院",
        username: "user_5",
        mail: "123@edu.cn",
        tel: "17458645214"
      }, {
        collegeName: "软件学院",
        username: "user_6",
        mail: "123@edu.cn",
        tel: "17458645214"
      }, {
        collegeName: "软件学院",
        username: "user_7",
        mail: "123@edu.cn",
        tel: "17458645214"
      }],
      multipleSelection: []
    }
  },
  components: {Modal},
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

.school_tips {
  font-size: 30px;
  color: red;
}

.el-pagination {
  margin-top: 20px;
  text-align: center;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>