<template>
  <div class="divContainer" id="app">
    <el-container>
      <el-header class="homeHeader">
        <span class="title"><b>一流专业申报系统</b></span>
        <span id="button_admin"><el-button>个人中心（管理员）</el-button></span>
      </el-header>
      <el-container>
        <div class="asideList">
          <aside-list></aside-list>
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

export default {
  name: "Home",
}

Vue.component("asideList", {
  template: '<el-aside >'
      + '<el-menu  background-color="#f2f2f2" @select="menuClick">'
      + '<el-submenu index="1">'
      + '<template slot="title"><i class="el-icon-menu"></i>申报管理</template>'
      + '<el-menu-item index="/test1">上传一流专业申报模板</el-menu-item>'
      + '<el-menu-item index="/test2">专家分组</el-menu-item>'
      + '</el-submenu>'
      + '<el-submenu index="2">'
      + '<template slot="title"><i class="el-icon-menu"></i>用户管理</template>'
      + '<el-menu-item index="/test1">公告管理</el-menu-item>'
      + '<el-menu-item index="/test2">在线用户</el-menu-item>'
      + '</el-submenu>'
      + '<el-submenu index="3">'
      + '<template slot="title"><i class="el-icon-menu"></i>系统管理</template>'
      + '<el-menu-item index="/test1">查看一流专业</el-menu-item>'
      + '</el-submenu>'
      + '<el-submenu index="4">'
      + '<template slot="title"><i class="el-icon-menu"></i>一流专业管理</template>'
      + '<el-menu-item index="/test1">上传一流专业申报模板</el-menu-item>'
      + '</el-submenu>'
      + '</el-menu>'
      + '</el-aside>',
  methods: {
    menuClick(index) {
      this.$router.push(index);
    }
  }
});

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
  margin-left: 200px;
  margin-right: 200px;
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