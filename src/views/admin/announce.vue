<template>
  <div>
    <div style="margin-bottom: 50px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>管理员</el-breadcrumb-item>
        <el-breadcrumb-item>公告管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="result_search">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-button type="primary" style="width:100px;margin-left: 50px">添加</el-button>
        <el-button type="success" style="width:100px;margin-left: 50px">删除</el-button>
        <el-form-item style="margin-left: 200px">
          <el-input v-model="formInline.major" placeholder="用户名" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item style="margin-left: 50px">
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
            prop="title"
            label="标题"
            width="200">
        </el-table-column>
        <el-table-column
            align="center"
            prop="writer"
            label="作者"
            width="120">
        </el-table-column>
        <el-table-column
            align="center"
            prop="username"
            label="用户名"
            show-overflow-tooltip>
        </el-table-column>
        <el-table-column
            align="center"
            prop="lastModifyDate"
            label="最近修改时间"
            show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <el-button
              type="warning"
              size="mini"
              @click="toggleModal">编辑
          </el-button>
          <el-button
              type="danger"
              size="mini"
              @click="open_del">删除
          </el-button>
          <el-button
              type="success"
              size="mini">预览
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

    <announce_detail v-show="showModal" v-on:closeme="closeme"></announce_detail>
  </div>
</template>

<script>
import announce_detail from "../../components/admin/announce_detail";

export default {
  name: "announce",
  components: {announce_detail},
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
        title: "关于搬迁至太仓校区",
        writer: "李世良",
        username: "西北工业大学",
        lastModifyDate: "2021-04-07"
      }, {
        title: "关于做好疫情防治工作",
        writer: "李世良",
        username: "省教育厅",
        lastModifyDate: "2021-04-07"
      }, {
        title: "关于举办运动会",
        writer: "陈军正",
        username: "西北工业大学",
        lastModifyDate: "2021-04-07"
      }, {
        title: "关于军训相关事宜",
        writer: "陈军正",
        username: "西北工业大学",
        lastModifyDate: "2021-04-07"
      }, {
        title: "关于学生工作",
        writer: "陈军歪",
        username: "省教育厅",
        lastModifyDate: "2021-04-07"
      }, {
        title: "关于食堂的管理工作",
        writer: "陈军歪",
        username: "省教育厅",
        lastModifyDate: "2021-04-07"
      }, {
        title: "关于学生的心理健康",
        writer: "李大亮",
        username: "省教育厅",
        lastModifyDate: "2021-04-07"
      }, {
        title: "关于上级领导视察",
        writer: "李大亮",
        username: "西北工业大学",
        lastModifyDate: "2021-04-07"
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
      this.$confirm('此操作将删除该公告, 是否继续?', '提示', {
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
  height: 470px;
}

.el-pagination {
  text-align: center;
  margin-top: 10px;
}
</style>