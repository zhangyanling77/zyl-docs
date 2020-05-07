<template>
  <div>
    <zyl-table
      :columns="columns1"
      :data="data1"
      @on-select="selectHandle"
      @on-select-all="selectAllHandle"
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
          type:'selection',
          width:60
        },
        {
          title: "Name",
          key: "name",
          slot:'name'
        },
        {
          title: "Age",
          key: "age",
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
    selectHandle(selection,row) {
      // selection 表示选中的所有的  row 表示当前是哪一个
      console.log(selection,row)
    },
    selectAllHandle(selection) {
      console.log(selection)
    },
  }
}
</script>
