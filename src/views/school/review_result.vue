<template>
  <div>
    <div style="margin-bottom: 50px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>管理员</el-breadcrumb-item>
        <el-breadcrumb-item>查看评审结果</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="result_search">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="学院">
          <el-input v-model="formInline.depart" placeholder="学院"></el-input>
        </el-form-item>
        <el-form-item label="专业名称">
          <el-input v-model="formInline.major" placeholder="专业名称"></el-input>
        </el-form-item>
        <el-form-item label="专业代码">
          <el-input v-model="formInline.major" placeholder="专业名称"></el-input>
        </el-form-item>
        <el-form-item>
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
          style="width: 100%;height: 100%"
          @selection-change="handleSelectionChange">
        <el-table-column
            label="编号"
            type="index"
            align="center"
            width="60">
        </el-table-column>
        <el-table-column
            prop="college"
            label="申报学院"
            align="center"
            width="120">
        </el-table-column>
        <el-table-column
            prop="code"
            align="center"
            label="专业代码"
            width="140">
        </el-table-column>
        <el-table-column
            prop="major"
            label="专业名称"
            align="center"
            width="120">
        </el-table-column>
        <el-table-column
            prop="manager"
            label="负责人"
            align="center"
            width="120">
        </el-table-column>
        <el-table-column
            prop="subject"
            label="所属学科"
            align="center"
            width="120">
        </el-table-column>
        <el-table-column
            label="申报材料"
            align="center"
            width="120">
          <el-button
              type="primary"
              size="mini">查看
          </el-button>
        </el-table-column>
        <el-table-column
            prop="status"
            label="申报结果"
            align="center"
            width="120">
        </el-table-column>
        <el-table-column
            prop="date"
            label="时间"
            align="center"
            width="120">
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
          style="margin-left: 20%;margin-top: 20px">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "review_result",
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
        college: '软件学院',
        code: "120122554",
        major: "软件工程",
        status: "申报通过",
        manager: "李世良",
        subject: '软件工程',
        date: '2021/03/02',
      }, {
        college: '软件学院',
        code: "120122554",
        major: "软件工程",
        status: "申报失败",
        manager: "李世良",
        subject: '软件工程',
        date: '2021/03/02',
      }, {
        college: '软件学院',
        code: "120122554",
        major: "软件工程",
        status: "申报通过",
        manager: "李世良",
        subject: '软件工程',
        date: '2021/03/02',
      }, {
        college: '软件学院',
        code: "120122554",
        major: "软件工程",
        status: "申报通过",
        manager: "李世良",
        subject: '软件工程',
        date: '2021/03/02',
      }, {
        college: '软件学院',
        code: "120122554",
        major: "软件工程",
        status: "申报失败",
        manager: "李世良",
        subject: '软件工程',
        date: '2021/03/02',
      }, {
        college: '软件学院',
        code: "120122554",
        major: "软件工程",
        status: "申报失败",
        manager: "李世良",
        subject: '软件工程',
        date: '2021/03/02',
      }, {
        college: '软件学院',
        code: "120122554",
        major: "软件工程",
        status: "申报失败",
        manager: "李世良",
        subject: '软件工程',
        date: '2021/03/02',
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
  margin-left: 50px;
}

.result_table {
  width: 90%;
  height: 450px;
  margin-left: 50px;
  margin-top: 20px;
}

.pages {
  margin-left: 50px;
  margin-top: 10px;
}
</style>