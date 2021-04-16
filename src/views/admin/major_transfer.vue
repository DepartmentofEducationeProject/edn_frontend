<template>
<div>
  <div class="transfer">
    <el-transfer
        filterable
        :filter-method="filterMethod"
        :titles="['全部专业', '已选专业']"
        filter-placeholder="请输入专业代号"
        v-model="value"
        :data="data">
    </el-transfer>
  </div>
</div>
</template>

<script>
export default {
  name: "major_transfer",
  data() {
    const generateData = _ => {
      const data = [];
      const majors = ['计算机科学与技术', '软件工程', '飞行器设计与制造', '探测与制导'];
      const pinyin = ['0001', '0002', '0003', '0004'];
      majors.forEach((major, index) => {
        data.push({
          label: major,
          key: index,
          pinyin: pinyin[index]
        });
      });
      return data;
    };
    return {
      data: generateData(),
      value: [],
      filterMethod(query, item) {
        return item.pinyin.indexOf(query) > -1;
      }
    };
  }
}
</script>

<style scoped>

</style>