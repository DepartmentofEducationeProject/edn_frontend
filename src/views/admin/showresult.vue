<template>
  <div>
    <div style="margin-bottom: 50px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>管理员</el-breadcrumb-item>
        <el-breadcrumb-item>查看评审结果</el-breadcrumb-item>
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
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="result_option">
      <el-button type="primary">刷新</el-button>
      <el-button type="success">切换</el-button>
      <el-button type="info">导出评审结果</el-button>
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
            type="selection"
            width="55">
        </el-table-column>
        <el-table-column
            prop="id"
            label="序号"
            width="120">
        </el-table-column>
        <el-table-column
            prop="school"
            label="学校"
            width="120">
        </el-table-column>
        <el-table-column
            prop="major"
            label="一流专业"
            width="120">
        </el-table-column>
        <el-table-column
            prop="status"
            label="专业状态">
        </el-table-column>
        <el-table-column
            prop="manager"
            label="负责人"
            width="120">
        </el-table-column>
        <el-table-column
            prop="tel"
            label="联系方式"
            width="120">
        </el-table-column>
        <el-table-column label="申报书">
          <template slot-scope="scope">
            <el-button
                type="primary"
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">查看
            </el-button>
          </template>
        </el-table-column>
        <el-table-column label="附加材料">
          <template slot-scope="scope">
            <el-button
                type="primary"
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">查看
            </el-button>
          </template>
        </el-table-column>
        <el-table-column
            prop="score"
            label="得分"
            show-overflow-tooltip>
        </el-table-column>
      </el-table>
    </div>
    <div class="block pages">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          style="margin-left: 20%">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "showresult",
  data() {
    return {
      formInline: {
        depart: '',
        major: '',
      },
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      tableData: [{
        id: "140001",
        school: "西北工业大学",
        major: "软件工程",
        status: "已审核",
        manager: "李世良",
        tel: "17625432168",
        score: "90"
      }, {
        id: "140001",
        school: "西北工业大学",
        major: "软件工程",
        status: "已审核",
        manager: "李世良",
        tel: "17625432168",
        score: "90"
      }, {
        id: "140001",
        school: "西北工业大学",
        major: "软件工程",
        status: "已审核",
        manager: "李世良",
        tel: "17625432168",
        score: "90"
      }, {
        id: "140001",
        school: "西北工业大学",
        major: "软件工程",
        status: "已审核",
        manager: "李世良",
        tel: "17625432168",
        score: "90"
      }, {
        id: "140001",
        school: "西北工业大学",
        major: "软件工程",
        status: "已审核",
        manager: "李世良",
        tel: "17625432168",
        score: "90"
      }, {
        id: "140001",
        school: "西北工业大学",
        major: "软件工程",
        status: "已审核",
        manager: "李世良",
        tel: "17625432168",
        score: "90"
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
}

.pages {
  margin-left: 50px;
  margin-top: 10px;
}
</style>