<template>
  <div>
    <div class="background">
      <img :src="imgSrc" width="100%" height="100%" alt=""/>
      <Video></Video>
    </div>
    <div class="loginContainer">
      <el-form :rules="rules" ref="loginForm" :model="loginForm">
        <h3 class="loginTitle">登陆系统</h3>
        <el-form-item prop="username">
          <el-input type="text" ref="username" v-model="loginForm.username" aria-placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" aria-placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="loginButton" @click="submitLogin">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Video from "../components/common/Video";

export default {
  name: "Login",
  components: {Video},
  data() {
    return {
      success: null,
      imgSrc: require('../assets/login_background.jpg'),
      loginForm: {
        username: "admin",
        password: "123"
      },
      rules: {
        username: [{required: true, message: "请输入用户名", trigger: "blur"}],
        password: [{required: true, message: "请输入密码", trigger: "blur"}],
      }
    };
  },
  created() {
    const _this = this;
    let data = {"account": "2017303105", "password": "000000"};
    axios.post('https://docs.xqjun.top/mock/69/api/auth/login', data).then(function (resp) {
      console.log(resp);
      alert(resp.data.data.roles);
    });
  },
  methods: {
    submitLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          if (true) {
            // const _this = this;
            // let data = {"account":"2017303105","password":"000000"};
            // axios.post('https://docs.xqjun.top/mock/69/api/auth/login',data).then(function (resp) {
            //   console.log(resp);
            // });
            // if (this.$refs.username.value === 'admin') {
            //   this.$router.push({path: '/adminHomePage', query: {username: this.$refs.username.value}});
            // } else if (this.$refs.username.value === 'school') {
            //   this.$router.push({path: '/schoolHomePage', query: {username: this.$refs.username.value}});
            // } else if (this.$refs.username.value === 'college') {
            //   this.$router.push({path: '/collegeHomePage', query: {username: this.$refs.username.value}});
            // } else if (this.$refs.username.value === 'expert') {
            //   this.$router.push({path: '/expertHomePage', query: {username: this.$refs.username.value}});
            // } else {
            //   alert("不存在该用户！");
            // }
          }
        } else {
          this.$message.error('请输入所有字段！');
          return false;
        }
      });
    }
  }
}
</script>

<style>
.background {
  border: solid;
  width: 98%;
  height: 98%; /**宽高100%是为了图片铺满屏幕 */
  z-index: -1;
  position: absolute;
}

.loginContainer {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 10% 32%;
  width: 30%;
  height: 40%;
  padding: 15px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  z-index: 1;
  position: absolute;
}

.loginTitle {
  margin: 0px auto 40px auto;
  text-align: center;
}

.loginButton {
  width: 100%;
}
</style>