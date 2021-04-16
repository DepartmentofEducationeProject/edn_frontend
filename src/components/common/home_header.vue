<template>
  <div>
    <div class="line"></div>
    <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
      <el-menu-item index="1">导航栏</el-menu-item>
      <el-menu-item index="2">消息中心</el-menu-item>
      <el-menu-item index="3"><a @click="toInformation()">个人信息</a></el-menu-item>
      <el-menu-item index="4"><a href="/" target="_blank">退出登陆</a></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "home_header",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    toInformation() {
      this.$router.push('/userInformation');
    },
  }
}

</script>

<style scoped>
.header {
  display: flex;
}

</style>