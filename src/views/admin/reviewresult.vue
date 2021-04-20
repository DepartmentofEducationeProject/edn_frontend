<template>
  <div>
    <div style="margin-bottom: 50px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>管理员</el-breadcrumb-item>
        <el-breadcrumb-item>评审结果</el-breadcrumb-item>
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
            width="50">
        </el-table-column>
        <el-table-column
            prop="id"
            label="编号"
            align="center"
            width="80">
        </el-table-column>
        <el-table-column
            prop="expName"
            label="专家名称"
            align="center"
            width="120">
        </el-table-column>
        <el-table-column
            prop="major"
            label="申报专业"
            align="center"
            width="180">
        </el-table-column>
        <el-table-column
            prop="school"
            label="申报学校"
            align="center"
            width="180">
        </el-table-column>
        <el-table-column
            prop="manager"
            label="负责人"
            align="center"
            width="80">
        </el-table-column>
        <el-table-column
            prop="tel"
            label="联系方式"
            align="center"
            width="180">
        </el-table-column>
        <el-table-column
            prop="level"
            label="专业层次"
            align="center"
            width="100">
        </el-table-column>
        <el-table-column
            prop="date"
            label="创建时间"
            align="center"
            width="120">
        </el-table-column>
        <el-table-column
            prop="score"
            label="得分"
            align="center"
            width="60px">
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
  name: "reviewresult",
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
        expName: "李世良",
        major: "软件工程",
        school: "西北工业大学",
        manager: "刘晓斌",
        tel: "17541285647",
        level: "一流学科",
        date: "2016-05-01",
        score: "90"
      }, {
        id: "140002",
        expName: "李晓亮",
        major: "计算机科学与技术",
        school: "西北工业大学",
        manager: "刘晓斌",
        tel: "17541245698",
        level: "一流学科",
        date: "2016-08-11",
        score: "86"
      }, {
        id: "140003",
        expName: "李忠良",
        major: "光学",
        school: "西北工业大学",
        manager: "刘晓斌",
        tel: "17541536925",
        level: "一流学科",
        date: "2016-04-21",
        score: "85"
      }, {
        id: "140004",
        expName: "李大亮",
        major: "应用数学",
        school: "西北工业大学",
        manager: "刘晓斌",
        tel: "17541245176",
        level: "一流学科",
        date: "2016-08-15",
        score: "73"
      }, {
        id: "140005",
        expName: "陈军正",
        major: "软件工程",
        school: "西安电子科技大学",
        manager: "陈康达",
        tel: "17541123694",
        level: "一流学科",
        date: "2016-02-03",
        score: "62"
      }, {
        id: "140006",
        expName: "陈军歪",
        major: "计算机科学与技术",
        school: "西安电子科技大学",
        manager: "陈康达",
        tel: "17541769841",
        level: "一流学科",
        date: "2016-05-01",
        score: "68"
      }, {
        id: "140007",
        expName: "陈不正",
        major: "微电子科学与技术",
        school: "西安电子科技大学",
        manager: "陈康达",
        tel: "17541564564",
        level: "一流学科",
        date: "2016-04-05",
        score: "92"
      }, {
        id: "140008",
        expName: "陈不歪",
        major: "数学",
        school: "西安电子科技大学",
        manager: "陈康达",
        tel: "17541888761",
        level: "一流学科",
        date: "2016-07-09",
        score: "81"
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

.el-pagination {
  text-align: center;
  margin-top: 10px;
}
</style>