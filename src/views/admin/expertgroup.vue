<template>
  <div>
    <div style="margin-bottom: 30px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>管理员</el-breadcrumb-item>
        <el-breadcrumb-item>专家分组</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="title">
      当前专家个数：<span style="color: red;">20</span>&nbsp;&nbsp;当前一流专业申报个数：<span style="color: #ff0000;margin-right: 30px">100</span>
      请输入分组数 ： &nbsp;<el-input v-model="input" style="width: 100px"></el-input>
      <el-button type="primary" style="margin-left: 30px">确定（一键生成）</el-button>
    </div>
    <div class="result_table">
      <el-table
          ref="multipleTable"
          :data="tableData"
          border
          height="500"
          tooltip-effect="dark"
          style="width: 81%;margin-left: 10%;overflow-x: hidden"
          @selection-change="handleSelectionChange">
        <el-table-column
            align="center"
            type="selection"
            width="83">
        </el-table-column>
        <el-table-column
            align="center"
            type="index"
            label="序号"
            width="120">
        </el-table-column>
        <el-table-column
            align="center"
            prop="group"
            label="组号"
            width="120">
        </el-table-column>
        <el-table-column
            align="center"
            label="专家列表"
            width="120">
          <el-button type="mini success" @click="showExpertList">查看列表</el-button>
        </el-table-column>
        <el-table-column
            align="center"
            label="专业列表"
            width="120">
          <el-button type="mini success" @click="showMajorList">查看列表</el-button>
        </el-table-column>
        <el-table-column
            align="center"
            label="编辑专家"
            width="120">
          <el-button type="mini primary" @click="toExpertTransfer()">修改专家</el-button>
        </el-table-column>
        <el-table-column
            align="center"
            label="编辑专业"
            width="120">
          <el-button type="mini primary" @click="toMajorTransfer()">修改专业</el-button>
        </el-table-column>
        <el-table-column
            align="center"
            label="操作"
            width="120">
          <el-button type="mini warning">删除</el-button>
        </el-table-column>
      </el-table>
    </div>
    <expert_list v-show="showExpert" v-on:closeExpert="closeExpert"></expert_list>
    <major_list v-show="showMajor" v-on:closeMajor="closeMajor"></major_list>
  </div>
</template>

<script>
import expert_list from "../../components/admin/expert_list";
import Major_list from "../../components/admin/major_list";

export default {
  name: "expertgroup",
  components: {Major_list, expert_list},
  data() {
    return {
      components: {
        expert_list,
      },
      input: '',
      tableData: [{
        group: '0001',
      }, {
        group: '0002',
      }, {
        group: '0003',
      }, {
        group: '0004',
      }, {
        group: '0005',
      }, {
        group: '0006',
      }, {
        group: '0007',
      }, {
        group: '0008',
      }, {
        group: '0009',
      }, {
        group: '0010',
      }, {
        group: '0011',
      }],
      showExpert: false,
      showMajor: false,
      multipleSelection: []
    }
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    onSubmit() {
      console.log('submit!');
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    showExpertList: function () {
      this.showExpert = !this.showExpert;
    },
    closeExpert: function () {
      this.showExpert = !this.showExpert;
    },
    showMajorList: function () {
      this.showMajor = !this.showMajor;
    },
    closeMajor: function () {
      this.showMajor = !this.showMajor;
    },
    toExpertTransfer() {
      this.$router.replace("/expert_transfer");
    },
    toMajorTransfer() {
      this.$router.replace("/major_transfer");
    }
  }
}
</script>

<style scoped>
.el-table .cell {
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-break: break-all;
  line-height: 23px;
  padding-right: 10px;
}

.title {
  height: 50px;
  text-align: center;
  font-size: 20px;
}

.result_table {
  margin-top: 20px;
  border: solid;
  height: 550px;
  background-color: #eaeaea;
}

</style>