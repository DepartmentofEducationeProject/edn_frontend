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
            width="180">
        </el-table-column>
        <el-table-column
            align="center"
            prop="code"
            label="专业代码"
            width="120">
        </el-table-column>
        <el-table-column
            align="center"
            prop="major"
            label="专业名称">
        </el-table-column>
        <el-table-column
            align="center"
            prop="manager"
            label="专业负责人">
        </el-table-column>
        <el-table-column
            align="center"
            prop="subject"
            label="所属学科">
        </el-table-column>
        <el-table-column
            align="center"
            label="申报材料">
          <el-button type="mini primary">查看</el-button>
        </el-table-column>
        <el-table-column
            align="center"
            prop="status"
            label="审批"
            width="80">
        </el-table-column>
        <el-table-column
            align="center"
            prop="date"
            label="时间">
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
        status: '通过',
        date: '2021/03/02'
      }, {
        college: '软件学院',
        code: "0001",
        major: '软件工程',
        manager: '李世良',
        subject: '软件工程',
        status: '通过',
        date: '2021/03/02'
      }, {
        college: '软件学院',
        code: "0001",
        major: '软件工程',
        manager: '李世良',
        subject: '软件工程',
        status: '通过',
        date: '2021/03/02'
      }, {
        college: '软件学院',
        code: "0001",
        major: '软件工程',
        manager: '李世良',
        subject: '软件工程',
        status: '通过',
        date: '2021/03/02'
      }, {
        college: '软件学院',
        code: "0001",
        major: '软件工程',
        manager: '李世良',
        subject: '软件工程',
        status: '通过',
        date: '2021/03/02'
      }, {
        college: '软件学院',
        code: "0001",
        major: '软件工程',
        manager: '李世良',
        subject: '软件工程',
        status: '通过',
        date: '2021/03/02'
      }, {
        college: '软件学院',
        code: "0001",
        major: '软件工程',
        manager: '李世良',
        subject: '软件工程',
        status: '通过',
        date: '2021/03/02'
      }, {
        college: '软件学院',
        code: "0001",
        major: '软件工程',
        manager: '李世良',
        subject: '软件工程',
        status: '通过',
        date: '2021/03/02'
      }]
    }
  }
}
</script>

<style scoped>
.el-table {
  width: 90%;
  height: 500px;
}

.el-pagination {
  margin-top: 20px;
  margin-left: 40%;
}
</style>