<template>
  <div class="modal-backdrop">
    <div class="modal">
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" class="el-form">
        <el-form-item label="账号">
          <el-input v-model="formLabelAlign.id" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="formLabelAlign.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formLabelAlign.password"></el-input>
        </el-form-item>
        <el-form-item label="身份">
          <el-input v-model="formLabelAlign.identity" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="所属机构">
          <el-input v-model="formLabelAlign.organization" :disabled="true"></el-input>
        </el-form-item>
      </el-form>
      <div class="el-button-div">
        <el-button type="success" class="button" @click="open">修改</el-button>
        <el-button type="primary" class="button" style="margin-left: 100px" @click="closeSelf">返回</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'Modal',
  props: {},
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
    }
  },
  methods: {
    closeSelf() {
      this.$emit("closeme");
    },
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

.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.modal {
  background-color: #fff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  width: 700px;
}

.el-form {
  width: 60%;
  margin-left: 15%;
  padding: 5%;
}

.el-button-div {
  text-align: center;;
  padding-bottom: 5%;
}

.button {
  width: 200px;
}
</style>