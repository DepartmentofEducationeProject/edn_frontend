<template>
  <div class="asidelist">
    <el-aside>
      <el-menu background-color="#224d79" @select="menuClick">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-menu"></i><span class="list_item"> 专业申报</span></template>
          <el-menu-item index="/notReviewed"><span class="list_item">未评审列表</span></el-menu-item>
          <el-menu-item index="/hasReviewed"><span class="list_item">已评审列表</span></el-menu-item>
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