<template>
  <div class="divContainer" id="app">
    <el-container>
      <el-aside width="301px">
        <div class="title">
          <span><br/>陕西高等教育教学改革<br/>一流课程申报系统</span>
        </div>
        <div class="asideList" id="aside_list">
          <asidelist_admin v-if="type==='admin'"></asidelist_admin>
          <asidelist_college v-if="type==='college'"></asidelist_college>
          <asidelist_expert v-if="type==='expert'"></asidelist_expert>
          <asidelist_school v-if="type=='school'"></asidelist_school>

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
import asidelist_school from "../components/common/asidelist_school";
import admin_homePage from "./admin/admin_homePage";
import Home_header from "../components/common/home_header";
import college_homePage from "./college/college_homePage";
import school_homePage from "./school/school_homePage";
import expert_homePage from "./expert/expert_homePage";


export default {
  name: "Home",
  data() {
    return {
      showHomePage: false,
      type: this.$route.query.username,
    }
  },
  components: {
    admin_homePage,
    college_homePage,
    school_homePage,
    expert_homePage,
    Home_header,
    asidelist_admin,
    asidelist_college,
    asidelist_expert,
    asidelist_school
  },
};
// const vm = new Vue({
//   el: "#app",
//   //Model:数据
//   data: {
//     type: 'A',
//   }
// });
</script>

<style scoped>
.homeHeader {
  background: #545c64;
  display: flex;
  align-items: center;
  width: 100%;
}

.divContainer {
  width: 1520px;
  height: 740px;
  overflow-y: hidden;
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