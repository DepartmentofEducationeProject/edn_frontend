<template>
  <div>
    <h4>专业名称：xxx 专业代码：xxx</h4>
    <el-steps :active="1" simple>
      <el-step title="提交申报书"></el-step>
      <el-step title="校级审核"></el-step>
      <el-step title="省级审核"></el-step>
      <el-step title="评审通过"></el-step>
    </el-steps>
    <h4>专业名称：xxx 专业代码：xxx</h4>
    <el-steps :active="2" simple>
      <el-step title="提交申报书"></el-step>
      <el-step title="校级审核"></el-step>
      <el-step title="省级审核"></el-step>
      <el-step title="评审通过"></el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
  name: "ProgressS"
}
</script>

<style scoped>

</style>
