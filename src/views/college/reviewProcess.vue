<template>
  <div>
    <h1>我的进度查询</h1>
    <el-table
        :data="tableData"
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
      <el-table-column
          align="center"
          prop="result"
          label="申报结果"
          width="80">
      </el-table-column>
      <el-table-column label="进度" align="center">
        <el-steps :active="2" simple>
          <el-step title="提交申报书"></el-step>
          <el-step title="校级审核"></el-step>
          <el-step title="省级审核"></el-step>
          <el-step title="评审通过"></el-step>
        </el-steps>
      </el-table-column>
    </el-table>
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
        manager: '李世良',
        result: '已通过',
        process: '3',
      }]
    }
  }
}
</script>

<style scoped>

</style>
