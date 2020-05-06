<template>
  <div>
    <zyl-input 
      v-model="value"
      type="text"
      :disabled="true"
      placeholder="请输入内容" 
      name="username"
    >
    </zyl-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 'zhangyanling'
    }
  }
}
</script>
