<template>
  <div class="modal-backdrop">
    <div class="modal" :style="mainStyles">
      <div class="announce_input">
        <h1>公告信息</h1>
        <el-input
            type="text"
            placeholder="请输入标题"
            v-model="text"
            maxlength="10"
            show-word-limit
        >
        </el-input>
        <div style="margin: 20px 0;"></div>
        <el-input
            type="textarea"
            placeholder="请输入内容"
            v-model="textarea"
            maxlength="30"
            :rows="12"
            style="max-height: 200px"
            show-word-limit
        >
        </el-input>
      </div>
      <div class="el-button-div">
        <el-button type="success" class="button" @click="open">修改</el-button>
        <el-button type="primary" class="button" style="margin-left: 100px" @click="closeSelf">返回</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'announce_detail',
  props: {},
  data() {
    return {
      text: '',
      textarea: ''
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
  height: 500px;
}

.el-button-div {
  text-align: center;;
  padding-bottom: 5%;
}

.button {
  width: 200px;
}

.announce_input {
  height: 500px;
  width: 80%;
  margin-left: 10%;
  text-align: center;
}

</style>