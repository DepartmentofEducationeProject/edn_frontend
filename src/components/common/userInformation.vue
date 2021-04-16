<template>
  <div>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" class="el-form">
      <el-form-item label="ID">
        <el-input v-model="formLabelAlign.id"></el-input>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="formLabelAlign.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.password"></el-input>
      </el-form-item>
      <el-form-item label="身份">
        <el-input v-model="formLabelAlign.identity"></el-input>
      </el-form-item>
      <el-form-item label="所属机构">
        <el-input v-model="formLabelAlign.organization"></el-input>
      </el-form-item>
    </el-form>
    <div class="el-button-div">
      <el-button type="success" class="button" @click="open">修改</el-button>
      <el-button type="primary" class="button" style="margin-left: 100px">返回</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "userInformation",
  data() {
    return {
      labelPosition: 'left',
      formLabelAlign: {
        id: "14000254",
        username: "李世良",
        password: "123456",
        identity: "管理员",
        organization: "省教育厅",
      }
    };
  },
  methods: {
    open() {
      this.$confirm('此操作将修改个人信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '修改成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消修改'
        });
      });
    },

  }
}
</script>

<style scoped>
.el-form {
  width: 60%;
  margin-left: 15%;
  margin-top: 10%;
  padding: 5%;
}

.el-button-div {
  text-align: center;
  padding-left: 50px;
}

.button {
  width: 200px;
}
</style>