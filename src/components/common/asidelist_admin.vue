<template>
  <el-aside>
    <el-menu background-color="#f2f2f2" @select="menuClick">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-menu"></i>申报管理</template>
        <el-menu-item index="/test1">上传一流专业申报模板</el-menu-item>
        <el-menu-item index="/test2">专家分组</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>用户管理</template>
        <el-menu-item index="/test1">公告管理</el-menu-item>
        <el-menu-item index="/test2">在线用户</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-menu"></i>系统管理</template>
        <el-menu-item index="/test1">查看一流专业</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title"><i class="el-icon-menu"></i>一流专业管理</template>
        <el-menu-item index="/test1">上传一流专业申报模板</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "asidelist_admin",
  methods: {
    menuClick(index) {
      this.$router.push(index);
    }
  }
}
</script>

<style scoped>

</style>