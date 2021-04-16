<template>
  <div>
    <h1>上传附加材料</h1>
    <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        :before-upload="beforeUpload"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList">
      <el-button size="big" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传pdf/zip/rar文件，且不超过200kb</div>
    </el-upload>

  </div>
</template>

<script>
export default {
  name: "AddFile",
  data() {
    return {
      fileList: [
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        },
        {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
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
    },
    beforeUpload(file) {
      var FileExt = file.name.replace(/.+\./, "");
      if (['zip', 'rar', 'pdf'].indexOf(FileExt.toLowerCase()) === -1) {
        this.$message({
          type: 'warning',
          message: '请上传后缀名为pdf、zip或rar的附件！'
        });
        return false;
      }
      this.isLt2k = file.size / 1024 < 200 ? '1' : '0';
      if (this.isLt2k === '0') {
        this.$message({
          message: '上传文件大小不能超过200k!',
          type: 'error'
        });
      }
      return this.isLt2k === '1' ? true : false;
    }
  }
}


</script>

<style scoped>

</style>
