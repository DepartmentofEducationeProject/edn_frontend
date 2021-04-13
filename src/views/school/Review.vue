<template>
  <div>
    <!--    <el-search placeholder="请输入省市区关键字"  @on-click="" ref="search"></el-search>-->
    <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column
          prop="college"
          label="申报学院">
      </el-table-column>
      <el-table-column
          prop="name"
          label="专业名称">
      </el-table-column>
      <el-table-column
          prop="code"
          label="专业代码">
      </el-table-column>
      <el-table-column
          prop="principal"
          label="专业负责人">
      </el-table-column>
      <el-table-column
          prop="subject"
          label="所属学科">
      </el-table-column>
      <el-table-column
          prop="declaration"
          label="申报书">
      </el-table-column>
      <el-table-column
          prop="file"
          label="附加材料">
      </el-table-column>
      <el-table-column
          prop="pass"
          label="通过">
      </el-table-column>
      <el-table-column
          prop="back"
          label="退回">
      </el-table-column>

    </el-table>
    <el-pagination
        background
        :page-size="10"
        :pager-count="5"
        layout="prev, pager, next"
        :total="100">
    </el-pagination>

  </div>


</template>

<script>

export default {
  name: "Review"
}
</script>

<style scoped>
</style>
