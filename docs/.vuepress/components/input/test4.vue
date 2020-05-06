<template>
  <div>
    <zyl-input 
      v-model="value"
      type="password"
      placeholder="请输入内容" 
      name="password"
    >
    </zyl-input>
    <zyl-input 
      v-model="value"
      type="password"
      placeholder="请输入内容" 
      name="password"
      show-password
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
