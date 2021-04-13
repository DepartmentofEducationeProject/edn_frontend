<template>
  <div>
    <h1>我的进度查询</h1>
    <el-steps :active="1" simple>
      <el-step title="提交申报书"></el-step>
      <el-step title="校级审核"></el-step>
      <el-step title="省级审核"></el-step>
      <el-step title="评审通过"></el-step>
    </el-steps>
  </div>

</template>

<script>
export default {
  name: "ProgressC"
}
</script>

<style scoped>

</style>
