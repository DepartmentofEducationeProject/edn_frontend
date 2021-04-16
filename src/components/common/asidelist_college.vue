<template>
  <div class="asidelist">
    <el-aside>
      <el-menu background-color="#224d79" @select="menuClick">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-menu"></i><span class="list_item">专业申报</span></template>
          <el-menu-item index="/declaration"><span class="list_item">填写专业申报书</span></el-menu-item>
          <el-menu-item index="/reviewProcess"><span class="list_item">申报进度查询</span></el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  name: "asidelist_college",
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