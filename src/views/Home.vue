<template>
  <div class="divContainer" id="app">
    <el-container>
      <el-aside width="301px">
        <div class="title">
          <span><br/>陕西高等教育教学改革<br/>一流专业申报系统</span>
        </div>
        <div class="asideList">
          <asidelist_admin></asidelist_admin>
        </div>
      </el-aside>
      <el-container>
        <el-header class="homeHeader">
          <home_header></home_header>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
import Vue from "vue";
import asidelist_admin from "../components/common/asidelist_admin";
import asidelist_college from "../components/common/asidelist_college";
import asidelist_expert from "../components/common/asidelist_expert";
import Home_header from "../components/common/home_header";

export default {
  name: "Home",
  components: {Home_header, asidelist_admin, asidelist_college, asidelist_expert},
}


new Vue({el: '#app'})
</script>

<style scoped>
.homeHeader {
  background: #545c64;
  display: flex;
  align-items: center;
  width: 100%;
}

.divContainer {
  height: 750px;
  border: solid 1px;
}

.divContainer .asideList {
  background: #224d79;
  width: 300px;
  height: 600px;
}

.title {
  width: 279px;
  font-size: 25px;
  color: white;
  background-color: #224d79;
  height: 150px;
  padding-left: 20px;
}
</style>