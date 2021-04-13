<template>
  <el-table
      :data="filteredBookings"
      :cell-class-name="cellClass"
      header-row-class-name="booking-table-header"
      row-class-name="booking-table-rows"
  >
    <el-table-column label="Status">
      <template slot-scope="tbl">
        {{ tbl.row.status }}
      </template>
    </el-table-column>
    <el-table-column label="Course date" class="course-date">
      <template slot-scope="tbl">
        {{ tbl.row.date_from }}
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  methods:
      {
        cellClass(obj) {
          return obj.columnIndex === 0 ? 'booking-cell' : '';
        },
      }
}
</script>

<style>
.el-table .cell {
  word-break: break-word;
}

tr.booking-table-header > th {
  text-transform: uppercase;
  background-color: #EFF0F5;
}

.booking-table-rows {
  text-transform: uppercase;
}

.booking-cell {
  text-transform: none;
}
</style>