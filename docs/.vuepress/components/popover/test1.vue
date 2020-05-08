<template>
  <div>
    <zyl-popover
      v-model="popVal1"
      width="200px"
      title="标题"
      content="内容，这是一个popover"
      trigger="click"
      placement="bottom"
    >
      <zyl-button slot="reference" type="primary">click激活</zyl-button>
    </zyl-popover>

    <zyl-popover
      v-model="popVal2"
      width="200px"
      title="标题"
      content="内容，这是一个popover"
      trigger="hover"
      placement="top"
    >
      <zyl-button slot="reference" type="primary">hover激活</zyl-button>
    </zyl-popover>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popVal1: false,
      popVal2: false
    }
  }
}
</script>
