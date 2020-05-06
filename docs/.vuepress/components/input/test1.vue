<template>
  <div>
    <zyl-input 
      v-model="value"
      type="text"
      placeholder="请输入内容" 
      name="username"
    >
    </zyl-input>
    {{value}}
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
