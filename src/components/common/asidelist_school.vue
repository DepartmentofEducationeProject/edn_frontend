<template>
  <div class="asidelist">
    <el-aside>
      <el-menu background-color="#224d79" @select="menuClick">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-menu"></i><span class="list_item"> 专业申报审批</span></template>
          <el-menu-item index="/majorReview"><span class="list_item">专业审批</span></el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i><span class="list_item"> 专业申报结果</span></template>
          <el-menu-item index="/reviewListProcess"><span class="list_item">进度查询</span></el-menu-item>
          <el-menu-item index="/reviewListResult"><span class="list_item">结果查询</span></el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-menu"></i><span class="list_item"> 用户管理</span></template>
          <el-menu-item index="/collegeUserManagement"><span class="list_item">管理学院用户</span></el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  name: "asidelist_school",
  methods: {
    menuClick(index) {
      this.$router.push(index);
    }
  }
}
</script>

<style scoped>
.asidelist {
  height: 500px;
}

.list_item {
  color: white;
}
</style>