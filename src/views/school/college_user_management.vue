<template>
  <div>
    <div style="margin-bottom: 50px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="result_search">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-button type="primary" style="width:100px;margin-left: 50px">刷新</el-button>
        <el-button type="success" style="width:100px;margin-left: 50px">切换</el-button>
        <el-button type="info" style="width:150px;margin-left: 50px">导出评审结果</el-button>
        <el-form-item style="margin-left: 200px">
          <el-input v-model="formInline.major" placeholder="学院名称" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item style="margin-left: 30px;width: 100px">
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <di>
      <span class="school_tips">注：双击表格某行可查看学院申报人和申报专业</span>
    </di>
    <div class="result_table">
      <el-table
          ref="multipleTable"
          :data="tableData"
          border
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
        <el-table-column
            label="选中"
            align="center"
            type="selection"
            width="60">
        </el-table-column>
        <el-table-column
            align="center"
            label="编号"
            type="index"
            width="60">
        </el-table-column>
        <el-table-column
            align="center"
            prop="collegeName"
            label="学院名称"
            width="200">
        </el-table-column>
        <el-table-column
            align="center"
            prop="username"
            label="用户名"
            width="200">
        </el-table-column>
        <el-table-column
            align="center"
            prop="mail"
            label="邮箱"
            width="200">
        </el-table-column>
        <el-table-column
            align="center"
            prop="tel"
            label="手机号码"
            width="200">
        </el-table-column>
        <el-table-column
            label="状态"
            align="center">
          <template slot-scope="scope">
            <el-button
                type="success"
                size="mini">正常
            </el-button>
          </template>
        </el-table-column>
        <el-table-column
            label="操作"
            align="center">
          <el-button
              type="primary"
              size="mini">编辑
          </el-button>
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
  name: "college_user_management",
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
        collegeName: "软件学院",
        username: "user_1",
        mail: "123@edu.cn",
        tel: "17458645214"
      }, {
        collegeName: "软件学院",
        username: "user_2",
        mail: "123@edu.cn",
        tel: "17458645214"
      }, {
        collegeName: "软件学院",
        username: "user_3",
        mail: "123@edu.cn",
        tel: "17458645214"
      }, {
        collegeName: "软件学院",
        username: "user_4",
        mail: "123@edu.cn",
        tel: "17458645214"
      }, {
        collegeName: "软件学院",
        username: "user_5",
        mail: "123@edu.cn",
        tel: "17458645214"
      }, {
        collegeName: "软件学院",
        username: "user_6",
        mail: "123@edu.cn",
        tel: "17458645214"
      }, {
        collegeName: "软件学院",
        username: "user_7",
        mail: "123@edu.cn",
        tel: "17458645214"
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
  margin-left: 0px;
}

.result_table {
  margin-top: 20px;
}

.pages {
  margin-left: 50px;
  margin-top: 10px;
}

.school_tips {
  font-size: 30px;
  color: red;
}
</style>