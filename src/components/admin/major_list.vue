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
              prop="date"
              label="日期"
              width="120">
          </el-table-column>
          <el-table-column
              prop="name"
              label="姓名"
              width="120">
          </el-table-column>
          <el-table-column
              prop="address"
              label="地址"
              width="120">
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
}

.modal {
  background-color: #fff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  width: 400px;
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
        date: '2016-05-03',
        name: '王小虎',
        address: '1501'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '1501'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '1501'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '1501'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '1501'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '1501'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '1501'
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