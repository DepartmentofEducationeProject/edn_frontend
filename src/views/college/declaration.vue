<template>
  <div class="declaration">
    <div style="margin-bottom: 50px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>学院</el-breadcrumb-item>
        <el-breadcrumb-item>填写专业申报书</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
      <el-tab-pane label="申报信息" name="first">
        <div>
          <el-form :inline="true" label-width="100px">
            <el-form-item label="专业代码">
              <el-select>
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="院校类别">
              <el-select>
                <el-option
                    :key="12"
                    :label="122"
                    :value="12">
                </el-option>
                <el-option
                    :key="13"
                    :label="133"
                    :value="13">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="专业名称" class="el-form-item">
              <el-col :span="25">
                <el-input placeholder="请输入专业名称"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="专业负责人" class="el-form-item" style="margin-left: 65px">
              <el-col :span="25">
                <el-input placeholder="请输入专业名负责人"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="所属学科" class="el-form-item">
              <el-col :span="25">
                <el-input placeholder="请输入所属学科"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="联系方式" class="el-form-item" style="margin-left: 65px">
              <el-col :span="25">
                <el-input placeholder="请输入联系方式"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="申报详情">
              <el-input type="textarea" style="width: 600px;min-height: 100px"></el-input>
            </el-form-item>
          </el-form>
          <div class="form-button">
            <el-button type="primary">提交</el-button>
            <el-button type="primary">查看申请书</el-button>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="附加材料" name="second">
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
              <el-button size="small" type="primary" class="upload_button" style="margin-left: 100px">上传</el-button>
            </el-upload>
          </div>
        </div>
        <div>
          <el-table
              :data="tableData"
              border
              style="width: 80%;margin-left: 10%;margin-top: 100px">
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
              <el-button class="el-icon-download">下载</el-button>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "Declaration",
  data() {
    return {
      activeName: 'first',
      options: [{
        value: '选项1',
        label: '12345'
      }, {
        value: '选项2',
        label: '88888'
      }],
      value5: [],
      value11: [],

      //富文本编辑框
      editorOption: {
        placeholder: '请输入院校简介',
        theme: 'snow',
        modules: {}
      },
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
    handleClick(tab, event) {
      console.log(tab, event);
    },
    //富文本编辑框
    onEditorChange() {
      console.log(this.value)
    },
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
.declaration {
  width: 80%;
  margin-left: 10%;
}

.el-form-item {
  margin-left: 50px;
}

.form-button {
  margin-left: 50px;
}

.upload_area {
  margin-top: 50px;
  display: flex;
  font-size: 50px;
}

.upload_input {
  width: 300px;
  height: 30px;
  margin-left: 100px;
}

.upload_button {
  margin-left: 100px;
  width: 100px;
  height: 40px;
}
</style>
