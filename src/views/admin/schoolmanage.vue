<template>
  <div>
    <div style="margin-bottom: 50px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>管理员</el-breadcrumb-item>
        <el-breadcrumb-item>学校管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="result_search">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-button type="primary" style="width:100px;margin-left: 50px">刷新</el-button>
        <el-button type="success" style="width:100px;margin-left: 50px">切换</el-button>
        <el-button type="info" style="width:150px;margin-left: 50px">导出评审结果</el-button>
        <el-form-item style="margin-left: 200px">
          <el-input v-model="formInline.major" placeholder="高校名称" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item style="margin-left: 30px;width: 100px">
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <di>
      <span class="school_tips">注：双击表格某行可查看该高校的申报者和申报专业</span>
    </di>
    <div class="result_table">
      <el-table
          ref="multipleTable"
          :data="tableData"
          border
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
          @row-dblclick="toggleDetail">
        <el-table-column
            label="序号"
            align="center"
            type="index"
            width="55">
        </el-table-column>
        <el-table-column
            align="center"
            prop="schoolName"
            label="高校名称"
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
            width="180">
        </el-table-column>
        <el-table-column
            align="center"
            prop="tel"
            label="手机号码"
            width="180">
        </el-table-column>
        <el-table-column label="状态" align="center">
          <template slot-scope="scope">
            <el-button
                type="success"
                size="mini">启用
            </el-button>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <el-button
              type="primary"
              size="mini"
              @click="toggleModal">编辑
          </el-button>
          <el-button
              type="danger"
              size="mini"
              @click="open_del">删除
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
    <school_detail v-show="showDetail" v-on:closeme="closeDetail"></school_detail>
  </div>
</template>

<script>
import Modal from "../../components/college/Modal";
import school_detail from "../../components/admin/school_detail";

export default {
  name: "schoolmanage",
  components: {Modal, school_detail},
  data() {
    return {
      showModal: false,
      showDetail: false,
      formInline: {
        depart: '',
        major: '',
      },
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      tableData: [{
        schoolName: "西北工业大学",
        username: "西北工业大学_01",
        mail: "npu@edu.cn",
        tel: "17458645214"
      }, {
        schoolName: "西北工业大学",
        username: "西北工业大学_02",
        mail: "npu@edu.cn",
        tel: "17458543198"
      }, {
        schoolName: "西北工业大学",
        username: "西北工业大学_03",
        mail: "123@edu.cn",
        tel: "17458452369"
      }, {
        schoolName: "西安交通大学",
        username: "西安交通大学_01",
        mail: "xjtu@edu.cn",
        tel: "17458369636"
      }, {
        schoolName: "西安交通大学",
        username: "西安交通大学_02",
        mail: "xjtu@edu.cn",
        tel: "17458125412"
      }, {
        schoolName: "西安电子科技大学",
        username: "西安电子科技大学_01",
        mail: "xdtu@edu.cn",
        tel: "174586145632"
      }, {
        schoolName: "西安电子科技大学",
        username: "西安电子科技大学_02",
        mail: "xdtu@edu.cn",
        tel: "17458987458"
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
    toggleDetail: function () {
      this.showDetail = !this.showDetail;
    },
    closeDetail: function () {
      this.showDetail = !this.showDetail;
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
  margin-top: 10px;
}

.school_tips {
  font-size: 30px;
  color: red;
}
</style>