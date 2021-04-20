<template>
  <div>
    <div style="margin-bottom: 50px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>管理员</el-breadcrumb-item>
        <el-breadcrumb-item>评审分组</el-breadcrumb-item>
        <el-breadcrumb-item>专家分组</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="transferDiv">
      <el-transfer
          filterable
          :filter-method="filterMethod"
          :titles="['未分组专家', '本组专家']"
          filter-placeholder="请输入专家名称"
          v-model="value"
          :data="data">
      </el-transfer>
      <div class="buttonDiv">
        <el-button type="primary" style="width: 150px" @click="open">保存</el-button>
        <el-button type="success" style="width:150px;margin-left: 100px" @click="back">返回</el-button>
      </div>
    </div>
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
  },
  methods: {
    back() {
      this.$router.replace("/expertgroup");
    },
    open() {
      this.$confirm('此操作将修改专家分组, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '修改成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消修改'
        });
      });
    }
  }
}
</script>

<style scoped>
.el-transfer {
  width: 100%;
  height: 100%;

}

.transferDiv {
  width: 600px;
  height: 400px;
  margin-left: 20%;
  margin-top: 10%;
}

.buttonDiv {
  text-align: center;
}
</style>