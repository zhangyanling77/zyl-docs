<template>
  <div>
    <zyl-table
      :columns="columns1"
      :data="data1"
      @on-sort-change="changeHandle"
    >
      <template slot="name" slot-scope="{row,col}">
        <b>{{row[col.key]}}</b>
      </template>
      <template slot="action" slot-scope="{row,col}">
        <zyl-button>删除</zyl-button>
      </template>
    </zyl-table>
  </div>
</template>

<style lang="scss">
  table {
    display: table;
  }
</style>

<script>
export default {
  data() {
    return {
      columns1: [
        {
          title: "Name",
          key: "name",
          slot:'name'
        },
        {
          title: "Age",
          key: "age",
          sortable:'normal', // iview  默认排序 排序方法 custom（远程排序）
          sortType:'asc',
        },
        {
          title: "Address",
          key: "address"
        },
        {
          title:'operator',
          slot:'action',
          key: "operator"
        }
      ],
      data1: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ],
    }
  },
  methods: {
    changeHandle({col,type}) {
      console.log(col,type)
    },
  }
}
</script>
