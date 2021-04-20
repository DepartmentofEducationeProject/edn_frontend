<template>
  <div>
    <div style="margin-bottom: 50px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>管理员</el-breadcrumb-item>
        <el-breadcrumb-item>查看一流专业</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="result_search">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="专业所在单位">
          <el-input v-model="formInline.depart" placeholder="专业所在单位"></el-input>
        </el-form-item>
        <el-form-item label="一流专业名称">
          <el-input v-model="formInline.major" placeholder="一流专业名称"></el-input>
        </el-form-item>
        <el-form-item label="专业层次">
          <el-input v-model="formInline.level" placeholder="专业层次"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="result_table">
      <el-table
          ref="multipleTable"
          :data="tableData"
          border
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
        <el-table-column
            align="center"
            type="index"
            width="80">
        </el-table-column>
        <el-table-column
            align="center"
            prop="id"
            label="编号"
            width="80">
        </el-table-column>
        <el-table-column
            align="center"
            prop="major"
            label="一流专业"
            width="200">
        </el-table-column>
        <el-table-column
            align="center"
            prop="school"
            label="所属学校"
            width="200">
        </el-table-column>
        <el-table-column
            align="center"
            prop="majorCode"
            label="专业代码"
            width="180">
        </el-table-column>
        <el-table-column
            align="center"
            prop="schoolCode"
            label="学校代码"
            width="180">
        </el-table-column>
        <el-table-column
            align="center"
            prop="date"
            label="申报时间">
        </el-table-column>
      </el-table>
    </div>

    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
    </el-pagination>

  </div>
</template>

<script>
export default {
  name: "showMajor",
  data() {
    return {
      formInline: {
        depart: '',
        major: '',
        level: ''
      },
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      tableData: [{
        id: "140001",
        major: '软件工程',
        school: '西北工业大学',
        majorCode: '140001542',
        schoolCode: '10025',
        date: '2021-05-21',
      }, {
        id: "140001",
        major: '计算机科学与技术',
        school: '西北工业大学',
        majorCode: '140001542',
        schoolCode: '10025',
        date: '2021-05-21',
      }, {
        id: "140001",
        major: '应用数学',
        school: '西北工业大学',
        majorCode: '140001542',
        schoolCode: '10025',
        date: '2021-05-21',
      }, {
        id: "140001",
        major: '飞行器设计与制造',
        school: '西北工业大学',
        majorCode: '140001542',
        schoolCode: '10025',
        date: '2021-05-21',
      }, {
        id: "140001",
        major: '软件工程',
        school: '西安电子科技大学',
        majorCode: '140001542',
        schoolCode: '10025',
        date: '2021-05-21',
      }, {
        id: "140001",
        major: '计算机科学与技术',
        school: '西安电子科技大学',
        majorCode: '140001542',
        schoolCode: '10025',
        date: '2021-05-21',
      }, {
        id: "140001",
        major: '电子科学与技术',
        school: '西安电子科技大学',
        majorCode: '140001542',
        schoolCode: '10025',
        date: '2021-05-21',
      }, {
        id: "140001",
        major: '电子科学与技术',
        school: '西安电子科技大学',
        majorCode: '140001542',
        schoolCode: '10025',
        date: '2021-05-21',
      }],
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
    }
  }
}
</script>

<style scoped>
.result_search {
  margin-left: 50px;
}

.result_option {
  display: flex;
}

.result_table {
  margin-top: 20px;
  height: 450px;
  /*border: solid;*/
}

.el-pagination {
  text-align: center;
  margin-top: 10px;
}
</style>