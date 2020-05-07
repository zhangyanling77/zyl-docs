# Table 表格
用于展示多条结构类似的数据，可对数据进行排序。

## 基础表格
<demo-block>
:::slot source
<table-test1></table-test1>
:::

传入 columns 表格项配置及 data 表格数据即可。

:::slot highlight
```html
<div>
  <zyl-table
    :columns="columns1"
    :data="data1"
  >
    <template slot="name" slot-scope="{row,col}">
      <b>{{row[col.key]}}</b>
    </template>
    <template slot="action" slot-scope="{row,col}">
      <zyl-button>删除</zyl-button>
    </template>
  </zyl-table>
</div>

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
  }
}
</script>
```
:::
</demo-block>

## 多选
选择多行数据时使用 Checkbox。

<demo-block>
:::slot source
<table-test2></table-test2>
:::

通过在columns配置中添加一项带 type 为selection 即可。

:::slot highlight
```html
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
```
:::
</demo-block>

## 排序
对表格进行排序，可快速查找或对比数据。

<demo-block>
:::slot source
<table-test3></table-test3>
:::

通过在 columns 中设置某一项的 sortable 及 sortType 来触发排序。

:::slot highlight
```html
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

```
:::
</demo-block>

## 固定表头
纵向内容过多时，可选择固定表头。

<demo-block>
:::slot source
<table-test4></table-test4>
:::

通过设置 height 属性来触发表头固定。

:::slot highlight
```html
<div>
  <zyl-table
    :columns="columns1"
    :data="data1"
    height="200px"
  >
    <template slot="name" slot-scope="{row,col}">
      <b>{{row[col.key]}}</b>
    </template>
    <template slot="action" slot-scope="{row,col}">
      <zyl-button>删除</zyl-button>
    </template>
  </zyl-table>
</div>

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
  }
}
</script>

```
:::
</demo-block>


## Table Attributes
参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-|:-
data | 显示的数据 | array | - | []
columns | 表格列的配置描述，具体项见后文 | array | - | []
height | 表格高度，单位 px，设置后，如果表格内容大于此值，会固定表头 | string | - | -

## Table Events
事件名|说明|参数
:-|:-|:-
select | 当用户手动勾选数据行的 Checkbox 时触发的事件 | selection,row
select-all | 当用户手动勾选全选 Checkbox 时触发的事件 | selection
sort-change | 当表格的排序条件发生变化的时候会触发该事件 | {col,type}

## Table Columns
参数|说明|类型|可选值|默认值
:-|:-|:-|:-|:-|:-
type | 列类型，可选值有 selection | string | - | -
title | 列头显示文字 | string | - | -
key | 对应列内容的字段名 | string | - | -
slot | 具名插槽的名字，用于插入自定义内容 | string | - | - 
sortable | 对应列是否可以排序，如果设置为 custom，则代表用户希望远程排序，需要监听 Table 的 on-sort-change 事件 | `boolean|'custom'` | - | false
sortType | 设置初始化排序。值为 asc 和 desc | string | - | -
