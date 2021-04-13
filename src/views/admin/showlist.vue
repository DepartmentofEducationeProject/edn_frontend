<template>
  <div style="height: 90%">
    <div style="margin-bottom: 50px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>管理员</el-breadcrumb-item>
        <el-breadcrumb-item>查看评审情况</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <div class="search_block">
          <div class="search_item">
            <el-form-item label="所在高校">
              <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="专业名称">
              <el-input v-model="formInline.region" placeholder="活动区域"></el-input>
            </el-form-item>
            <br/>
            <el-form-item label="专业代码">
              <el-input v-model="formInline.region" placeholder="活动区域"></el-input>
            </el-form-item>
            <el-form-item label="专业类别">
              <el-input v-model="formInline.region" placeholder="活动区域"></el-input>
            </el-form-item>
          </div>
          <div class="search_button">
            <el-form-item>
              <el-button type="primary" @click="onSubmit" style="  width: 200px;height: 100px;font-size: 50px">查询
              </el-button>
            </el-form-item>
          </div>
        </div>
      </el-form>
    </div>
    <div class="list_table">
      <el-table
          ref="singleTable"
          :data="tableData"
          border
          highlight-current-row
          @current-change="handleCurrentChange"
          style="width: 100%">
        <el-table-column
            type="index"
            label="序号"
            width="60">
        </el-table-column>
        <el-table-column
            property="school"
            label="所在学校"
            width="140">
        </el-table-column>
        <el-table-column
            property="majorName"
            label="专业名称"
            width="120">
        </el-table-column>
        <el-table-column
            property="majorNum"
            label="专业代码"
            width="120">
        </el-table-column>
        <el-table-column
            property="name"
            label="申报人"
            width="120">
        </el-table-column>
        <el-table-column
            property="tel"
            label="联系方式"
            width="140">
        </el-table-column>
        <el-table-column
            property="status"
            label="状态"
            width="120">
        </el-table-column>
        <el-table-column label="材料">
          <template slot-scope="scope">
            <el-button
                type="primary"
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">查看
            </el-button>
          </template>
        </el-table-column>
        <el-table-column label="通过">
          <template slot-scope="scope">
            <el-button
                type="success"
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">通过
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pages">
      <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "showlist",
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      },
      tableData: [{
        school: "西北工业大学",
        majorName: "软件工程",
        majorNum: "140001",
        name: "李世良",
        tel: "17542897541",
        status: "待审核",
        file: "",
        review: "",
      }, {
        school: "西北工业大学",
        majorName: "软件工程",
        majorNum: "140001",
        name: "李世良",
        tel: "17542897541",
        status: "待审核",
        file: "",
        review: "",
      }, {
        school: "西北工业大学",
        majorName: "软件工程",
        majorNum: "140001",
        name: "李世良",
        tel: "17542897541",
        status: "待审核",
        file: "",
        review: "",
      }, {
        school: "西北工业大学",
        majorName: "软件工程",
        majorNum: "140001",
        name: "李世良",
        tel: "17542897541",
        status: "待审核",
        file: "",
        review: "",
      }, {
        school: "西北工业大学",
        majorName: "软件工程",
        majorNum: "140001",
        name: "李世良",
        tel: "17542897541",
        status: "待审核",
        file: "",
        review: "",
      }, {
        school: "西北工业大学",
        majorName: "软件工程",
        majorNum: "140001",
        name: "李世良",
        tel: "17542897541",
        status: "待审核",
        file: "",
        review: "",
      }],
      multipleSelection: []
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
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
    }
  }
}
</script>

<style scoped>
.search_block {
  margin-top: 10px;
  margin-left: 100px;
  display: flex;
}

.search_item {
  width: 600px;
}

.search_button {
  font-size: 100px;
}

.list_table {
  width: 90%;
  margin-left: 5%;
  height: 350px;
}

.pages {
  margin-top: 20px;
  margin-left: 25%;
}
</style>