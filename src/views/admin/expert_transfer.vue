<template>
  <div>
    <el-transfer
        filterable
        class=" el-transfer-panel__list is-filterable el-transfer-panel"
        :filter-method="filterMethod"
        :titles="['全部专家', '已选专家']"
        filter-placeholder="请输入专家名称"
        v-model="value"
        :data="data">
    </el-transfer>
  </div>
</template>

<script>
export default {
  name: "expert_transfer",
  data() {
    const generateData = _ => {
      const data = [];
      const experts = ['李世良', '刘晓斌', '陈康达', '陈军正', '张雅松'];
      const pinyin = ['lishiliang', 'liuxiaobin', 'chenkangda', 'chenjunzheng', 'zhangyasong'];
      experts.forEach((expert, index) => {
        data.push({
          label: expert,
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
.transfer {
  margin-left: 20%;
  margin-top: 10%;
  height: 6000px;
  width: 1200px;
}

.el-transfer-panel {
  width: 400px;
  /*height: 300px;*/
}

.el-transfer-panel__list.is-filterable {
  height: 600px;
  width: 800px;
}
</style>