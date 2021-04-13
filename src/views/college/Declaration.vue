<template>
  <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
    <el-tab-pane label="申报信息" name="first">
      <div class="">
        <el-form :inline="true">
          <el-form-item label="专业代码">
            <el-col :span="28">

            </el-col>
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
        </el-form>

      </div>
      <div class="demo-input-suffix">
        <el-form :inline="true">
          <el-form-item label="专业名称">
            <el-col :span="25">
              <el-input placeholder="请输入专业名称"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="专业负责人">
            <el-col :span="25">
              <el-input placeholder="请输入专业名负责人"></el-input>
            </el-col>
          </el-form-item>
        </el-form>
        <el-form :inline="true">
          <el-form-item label="所属学科">
            <el-col :span="25">
              <el-input placeholder="请输入所属学科"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="联系方式">
            <el-col :span="25">
              <el-input placeholder="请输入联系方式"></el-input>
            </el-col>
          </el-form-item>
        </el-form>

      </div>

      <!--   富文本编辑器   -->
      <!--      <el-form-item label="内容" :label-width="formLabelWidth">-->
      <!--        <quill-editor v-model="value" ref="myQuillEditor" :options="editorOption" @change="onEditorChange($event)">-->
      <!--        </quill-editor>-->
      <!--      </el-form-item>-->

    </el-tab-pane>
    <!--    <el-tab-pane label="配置管理" name="second">附加材料</el-tab-pane>-->
    <!--    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>-->
    <!--    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>-->
  </el-tabs>
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
    };

  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    //富文本编辑框
    onEditorChange() {
      console.log(this.value)
    }
  }

}
</script>

<style lang="less" scoped>

</style>
