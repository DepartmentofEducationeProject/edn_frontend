<template>
  <div class="basic">
    <div class="filearea">

    </div>
    <div class="optionarea">
      <span style="font-size: 20px;margin: 20px">每项的得分不超过最高分，评分为整数或保留一位小数</span>
      <el-table
          :data="tableData"
          border
          style="width: 80%;margin-left: 10%;margin-top: 10px">
        <el-table-column
            align="center"
            prop="type"
            label="评分标准"
            height="50"
            width="160">
        </el-table-column>
        <el-table-column
            align="center"
            prop="max"
            label="最高分"
            width="160">
        </el-table-column>
        <el-table-column
            align="center"
            label="得分">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>


<script>
import pdf from "vue-pdf";

export default {
  name: "reviewPage",
  components: {pdf},
  data() {
    return {
      input: "",
      tableData: [{
        type: 'A',
        max: '50',
      }, {
        type: 'B',
        max: '30',
      }, {
        type: 'C',
        max: '20',
      }]
    };
  },
  methods: {}
}
</script>

<style scoped>
.basic {
  display: flex;
  width: 1150px;
  height: 550px;
  border: solid;
  background-color: #224d79;
}

.filearea {
  border: solid;
  width: 50%;
  height: 100%;
}

.optionarea {
  border: solid;
  width: 50%;
  height: 100%;
}
</style>