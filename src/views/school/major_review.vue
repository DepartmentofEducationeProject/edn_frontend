<template>
  <div>
    <div style="margin-bottom: 30px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>学院</el-breadcrumb-item>
        <el-breadcrumb-item>专业审批列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div style="height: 600px">
      <el-table
          class="el-table"
          :data="tableData"
          border
          style="width: 100%">
        <el-table-column
            label="编号"
            type="index"
            align="center"
            width="60">
        </el-table-column>
        <el-table-column
            align="center"
            prop="college"
            label="申报学院"
            width="120">
        </el-table-column>
        <el-table-column
            align="center"
            prop="code"
            label="专业代码"
            width="80">
        </el-table-column>
        <el-table-column
            align="center"
            prop="major"
            label="专业名称"
            width="160">
        </el-table-column>
        <el-table-column
            align="center"
            prop="manager"
            label="专业负责人">
        </el-table-column>
        <el-table-column
            align="center"
            prop="subject"
            label="所属学科"
            width="160">
        </el-table-column>
        <el-table-column
            align="center"
            label="申报材料">
          <el-button type="mini primary">查看</el-button>
        </el-table-column>
        <el-table-column
            align="center"
            prop="date"
            label="时间">
        </el-table-column>
        <el-table-column
            align="center"
            prop="status"
            label="审批状态">
        </el-table-column>
        <el-table-column
            align="center"
            label="审批"
            width="80">
          <el-button type="success" class="el-button" @click="open_pas">通过</el-button>
        </el-table-column>
        <el-table-column
            align="center"
            label="退回"
            width="80">
          <el-button type="danger" class="el-button" @click="open_del">退回</el-button>
        </el-table-column>
      </el-table>
      <el-pagination
          class="el-pagination"
          background
          layout="prev, pager, next"
          :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "major_review",
  data() {
    return {
      tableData: [{
        college: '软件学院',
        code: "0001",
        major: '软件工程',
        manager: '李世良',
        subject: '软件工程',
        status: '校方通过',
        date: '2021/03/02'
      }, {
        college: '计算机学院',
        code: "0002",
        major: '计算机科学与技术',
        manager: '刘晓斌',
        subject: '计算机科学与技术',
        status: '校方通过',
        date: '2021/03/02'
      }, {
        college: '计算机学院',
        code: "0003",
        major: '应用计算机学',
        manager: '陈军正',
        subject: '计算机科学与技术',
        status: '校方通过',
        date: '2021/03/02'
      }, {
        college: '理学院',
        code: "0004",
        major: '应用数学',
        manager: '李晓丽',
        subject: '数学',
        status: '教育厅通过',
        date: '2021/03/02'
      }, {
        college: '理学院',
        code: "0005",
        major: '材料化学',
        manager: '李大亮',
        subject: '化学',
        status: '教育厅通过',
        date: '2021/03/02'
      }, {
        college: '材料学院',
        code: "0006",
        major: '材料科学与技术',
        manager: '陈军歪',
        subject: '材料科学',
        status: '教育厅通过',
        date: '2021/03/02'
      }, {
        college: '航空学院',
        code: "0007",
        major: '飞行器设计与制造',
        manager: '陈军正',
        subject: '航空宇航科学与技术',
        status: '教育厅通过',
        date: '2021/03/02'
      }, {
        college: '航空学院',
        code: "0008",
        major: '探测与制导',
        manager: '李世良',
        subject: '航空宇航科学与技术',
        status: '教育厅通过',
        date: '2021/03/02'
      }, {
        college: '航海学院',
        code: "0009",
        major: '水声科学',
        manager: '李忠良',
        subject: '航空宇航科学与技术',
        status: '教育厅通过',
        date: '2021/03/02'
      }]
    }
  },
  methods: {
    open_pas() {
      this.$confirm('此操作将通过该申请, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '已通过!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消！'
        });
      });
    },
    open_del() {
      this.$confirm('此操作将删除该申请, 是否继续?', '提示', {
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
.el-table {
  width: 90%;
  height: 550px;
}

.el-pagination {
  margin-top: 20px;
  text-align: center;
}

.el-button {
  width: 50px;
  height: 30px;
  text-align: center;
  padding: 0px;
}
</style>