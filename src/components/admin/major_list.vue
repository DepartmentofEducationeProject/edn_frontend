<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-header">
        <h3>专业列表</h3>
      </div>
      <div class="modal-body">
        <el-table
            :data="tableData"
            height="250"
            border
            style="width: 100%"
            :row-style="{height:'10px'}">
          <el-table-column
              align="center"
              type="index"
              label="序号"
              width="60">
          </el-table-column>
          <el-table-column
              align="center"
              prop="major"
              label="专业名称"
              width="180">
          </el-table-column>
          <el-table-column
              align="center"
              prop="id"
              label="专业代码"
              width="120">
          </el-table-column>
          <el-table-column
              align="center"
              prop="school"
              label="申报学校">
          </el-table-column>
        </el-table>
      </div>
      <div class="modal-footer">
        <el-button type="primary" class="btn-close" @click="closeSelf">关闭</el-button>
      </div>
    </div>
  </div>
</template>

<style>
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
  border: solid;
  z-index: 1;
}

.modal {
  background-color: #fff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  width: 600px;
}

.modal-header {
  border-bottom: 1px solid #eee;
  color: #313131;
  justify-content: space-between;
  padding: 15px;
  display: flex;
}

.modal-footer {
  border-top: 1px solid #eee;
  justify-content: flex-end;
  padding: 15px;
  display: flex;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border-radius: 8px;
  margin-left: 16px;
  width: 70px;
  height: 36px;
  border: none;
  cursor: pointer;
}

.btn-close {
  color: #313131;
  background-color: transparent;
}


</style>

<script>
export default {
  name: 'major_list',
  props: {},
  data() {
    return {
      tableData: [{
        id: '1044214',
        major: '软件工程',
        school: '西北工业大学',
      }, {
        id: '1044216',
        major: '计算机科学与技术',
        school: '西北工业大学',
      }, {
        id: '1044217',
        major: '微电子科学与技术',
        school: '西北工业大学',
      }, {
        id: '1044218',
        major: '应用数学',
        school: '西北工业大学',
      }, {
        id: '1044219',
        major: '探测与指导',
        school: '西北工业大学',
      }, {
        id: '1044210',
        major: '光学',
        school: '西北工业大学',
      }, {
        id: '1044211',
        major: '飞行器设计与制造',
        school: '西北工业大学',
      }, {
        id: '1044212',
        major: '材料科学与技术',
        school: '西北工业大学',
      }]
    }
  },
  methods: {
    closeSelf() {
      this.$emit("closeMajor");
    }
  }
}

</script>