<template>
  <div class="modal-backdrop">
    <div class="modal">
      <el-table
          :label-position="labelPosition"
          label-width="80px"
          :data="data"
          border
          class="el-table">
        <el-table-column
            label="序号"
            type="index"
            align="center"
            width="80px">
        </el-table-column>
        <el-table-column
            prop="person"
            align="center"
            label="申报者">
        </el-table-column>
        <el-table-column
            prop="major"
            align="center"
            label="申报专业">
        </el-table-column>
      </el-table>
      <div class="el-button-div">
        <el-button type="primary" class="button" @click="closeSelf">返回</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'school_detail',
  props: {},
  data() {
    return {
      labelPosition: 'left',
      data: [{
        person: '李世良',
        major: '软件工程',
      }, {
        person: '李世良',
        major: '软件工程',
      }, {
        person: '李世良',
        major: '软件工程',
      }, {
        person: '李世良',
        major: '软件工程',
      }, {
        person: '李世良',
        major: '软件工程',
      }, {
        person: '李世良',
        major: '软件工程',
      }, {
        person: '李世良',
        major: '软件工程',
      }]
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
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  width: 700px;
  height: 400px;
}

.el-table {
  width: 80%;
  margin-left: 10%;
  margin-top: 20px;
  overflow-y: auto;
  height: 250px;
}

.el-button-div {
  text-align: center;
  margin-top: 20px;
}

.button {
  width: 150px;
}
</style>