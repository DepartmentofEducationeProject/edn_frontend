<template>
  <div class="divContainer" id="app">
    <el-container>
      <el-header class="homeHeader">
        <span class="title"><b>一流专业申报系统</b></span>
        <span id="button_admin"><el-button>个人中心（管理员）</el-button></span>
      </el-header>
      <el-container>
        <div class="asideList">
          <asidelist_admin></asidelist_admin>
        </div>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Vue from "vue";
import Asidelist_admin from "../components/common/asidelist_admin";

export default {
  name: "Home",
  components: {Asidelist_admin},
}

new Vue({el: '#app'})
</script>

<style scoped>
.homeHeader {
  background: #81d3f8;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 75px;
}

.homeHeader .title {
  font-size: 50px;
  font-family: 黑体;
}

.divContainer {
  height: 750px;
  border: solid 1px;
}

.divContainer .asideList {
  background: #f2f2f2;
  width: 300px;
  height: 600px;
}

#button_admin {
  float: right;
  margin-left: 350px;
}
</style>