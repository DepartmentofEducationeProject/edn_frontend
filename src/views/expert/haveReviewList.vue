<template>
  <div>
    <div style="margin-bottom: 50px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>专家</el-breadcrumb-item>
        <el-breadcrumb-item>已审批列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div style="width: 100%">
      <span class="title">已评审专业列表</span>
    </div>
    <div class="reviewTable">
      <el-table
          :data="tableData"
          border>
        <el-table-column
            prop="majorName"
            label="专业名称"
            align="center"
            width="180">
        </el-table-column>
        <el-table-column
            prop="schoolName"
            label="申报学校"
            align="center"
            width="180">
        </el-table-column>
        <el-table-column
            prop="manager"
            label="专业负责人"
            align="center"
            width="180">
        </el-table-column>
        <el-table-column
            prop="status"
            label="评审状态"
            align="center"
            width="180">
        </el-table-column>
        <el-table-column
            align="center"
            label="操作">
          <el-button
              type="success"
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">查看
          </el-button>
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
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
  name: "HaveReviewList",
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },

  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      tableData: [{
        majorName: "软件工程",
        schoolName: "西北工业大学",
        manager: "李世良",
        status: "已评审",
      }, {
        majorName: "软件工程",
        schoolName: "西北工业大学",
        manager: "李世良",
        status: "已评审",
      }, {
        majorName: "软件工程",
        schoolName: "西北工业大学",
        manager: "李世良",
        status: "已评审",
      }, {
        majorName: "软件工程",
        schoolName: "西北工业大学",
        manager: "李世良",
        status: "已评审",
      }, {
        majorName: "软件工程",
        schoolName: "西北工业大学",
        manager: "李世良",
        status: "已评审",
      }, {
        majorName: "软件工程",
        schoolName: "西北工业大学",
        manager: "李世良",
        status: "已评审",
      }, {

        majorName: "软件工程",
        schoolName: "西北工业大学",
        manager: "李世良",
        status: "已评审",
      }]
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 40px;
  align-items: center;
  margin-left: 30%;
}

.reviewTable {
  margin-top: 20px;
  width: 80%;
  margin-left: 10%;
  height: 450px;
}

.block {
  margin-left: 10%;
}
</style>