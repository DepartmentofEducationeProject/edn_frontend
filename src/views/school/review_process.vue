<template>
  <div class="reviewPrecess">
    <div style="margin-bottom: 30px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>学院</el-breadcrumb-item>
        <el-breadcrumb-item>专业评审进度</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div style="text-align:center"><h1>学校一流专业申报进度一览</h1></div>
    <el-table
        :data="tableData"
        class="el-table"
        border
        style="width: 100%"
        align="center">
      <el-table-column
          align="center"
          prop="name"
          label="专业名称"
          width="180">
      </el-table-column>
      <el-table-column
          align="center"
          prop="college"
          label="申报学院"
          width="120">
      </el-table-column>
      <el-table-column
          align="center"
          prop="manager"
          label="负责人"
          width="80">
      </el-table-column>
      <!--      <el-table-column-->
      <!--          align="center"-->
      <!--          prop="result"-->
      <!--          label="申报结果"-->
      <!--          width="80">-->
      <!--      </el-table-column>-->
      <el-table-column label="进度" align="center">
        <el-steps :active="1" simple>
          <el-step title="已经提交"></el-step>
          <el-step title="校级审核"></el-step>
          <el-step title="省级审核"></el-step>
        </el-steps>
      </el-table-column>
    </el-table>
    <el-pagination
        class="el-pagination"
        background
        layout="prev, pager, next"
        :total="1000">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "reviewProgress",
  data() {
    return {
      tableData: [{
        name: '软件工程',
        college: '西北工业大学',
        manager: '李世良',
        result: '审核中',
        process: '1',
      }, {
        name: '计算机科学与技术',
        college: '西北工业大学',
        manager: '刘晓斌',
        result: '已通过',
        process: '3',
      }, {
        name: '微电子科学与技术',
        college: '西北工业大学',
        manager: '陈军正',
        result: '已通过',
        process: '3',
      }, {
        name: '应用数学',
        college: '西北工业大学',
        manager: '李忠良',
        result: '已通过',
        process: '3',
      }, {
        name: '探测与制导',
        college: '西北工业大学',
        manager: '李大亮',
        result: '已通过',
        process: '3',
      }, {
        name: '飞行器设计与制造',
        college: '西北工业大学',
        manager: '陈军歪',
        result: '已通过',
        process: '3',
      }, {
        name: '材料科学与技术',
        college: '西北工业大学',
        manager: '陈不正',
        result: '已通过',
        process: '3',
      }]
    }
  }
}
</script>

<style scoped>
.reviewPrecess {
  height: 60px;
}

.el-table {
  height: 510px;
}

.el-pagination {
  text-align: center;
  margin-top: 10px;
}
</style>
