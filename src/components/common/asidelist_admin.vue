<template>
  <div class="asidelist">
    <el-aside>
      <el-menu background-color="#224d79" @select="menuClick">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-menu"></i><span class="list_item">申报管理</span></template>

          <!--          <el-menu-item index="/upload"><span class="list_item">上传继续教育申报模板</span></el-menu-item>-->
          <el-menu-item index="/showlist"><span class="list_item">查看并审核学校上报专业</span></el-menu-item>
          <el-menu-item index="/expertgroup"><span class="list_item">评审分组</span></el-menu-item>
          <el-menu-item index="/reviewprogress"><span class="list_item">查看专家评审进度</span></el-menu-item>
          <el-menu-item index="/reviewresult"><span class="list_item">查看专家打分结果</span></el-menu-item>
          <el-menu-item index="/showresult"><span class="list_item">申报结果查看</span></el-menu-item>

        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i><span class="list_item">用户管理</span></template>
          <el-menu-item index="/schoolmanage"><span class="list_item">学校用户管理</span></el-menu-item>
          <el-menu-item index="/expertmanage"><span class="list_item">专家用户管理</span></el-menu-item>
          <el-menu-item index="/adminmanage"><span class="list_item">管理员用户管理</span></el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-menu"></i><span class="list_item">系统管理</span></template>
          <el-menu-item index="/announce"><span class="list_item">公告管理</span></el-menu-item>
          <el-menu-item index="/onliner"><span class="list_item">在线用户</span></el-menu-item>
          <el-menu-item index="/systemlog"><span class="list_item">系统日志</span></el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"><i class="el-icon-menu"></i><span class="list_item">一流专业管理</span></template>
          <el-menu-item index="/showMajor"><span class="list_item">查看一流专业</span></el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  name: "asidelist_admin",
  methods: {
    menuClick(index) {
      this.$router.replace(index);
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