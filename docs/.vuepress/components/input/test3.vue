<template>
  <div>
    <zyl-input 
      v-model="value"
      type="text"
      placeholder="请输入内容" 
      name="username"
      clearable
    >
    </zyl-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
