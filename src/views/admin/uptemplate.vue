<template>
  <div>
    <div style="margin-bottom: 50px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>管理员</el-breadcrumb-item>
        <el-breadcrumb-item>材料上传</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="upload_title"><span>一流专业申报书模板（请上传WORD文档）</span></div>
    <div class="upload_area">
      <div>
        <el-input v-model="input" class="upload_input"></el-input>
      </div>
      <div>
        <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList">
          <el-button size="small" type="primary" class="upload_button">浏览</el-button>
        </el-upload>
      </div>
    </div>
    <div>
      <el-table
          :data="tableData"
          border
          style="width: 60%;margin-left: 15%;margin-top: 100px">
        <el-table-column
            align="center"
            type="selection"
            width="80">
        </el-table-column>
        <el-table-column
            align="center"
            prop="num"
            type="index"
            label="序号"
            width="80">
        </el-table-column>
        <el-table-column
            align="center"
            prop="name"
            label="文件名"
            width="270">
        </el-table-column>
        <el-table-column
            align="center"
            prop="option"
            label="操作">
        </el-table-column>
      </el-table>
    </div>

  </div>
</template>

<script>
export default {
  name: "uptemplate",
  data() {
    return {
      fileList: [],
      tableData: [{
        selected: "",
        number: '1',
        name: '一流专业申报书模板.docx',
        option: ''
      }, {
        selected: "",
        number: '2',
        name: '一流专业申报书模板(改动).docx',
        option: ''
      }]
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  }
}
</script>

<style scoped>
.upload_title {
  margin-top: 50px;
  margin-left: 200px;
  font-size: 30px;
}

.upload_area {
  margin-top: 50px;
  display: flex;
  font-size: 50px;
}

.upload_input {
  width: 500px;
  height: 30px;
  margin-left: 200px;
}

.upload_button {
  margin-left: 50px;
  width: 100px;
  height: 40px;
}
</style>