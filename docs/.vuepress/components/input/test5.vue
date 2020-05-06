<template>
  <div>
    <zyl-input 
      v-model="value"
      type="text"
      placeholder="请输入内容" 
      name="username"
      prefix-icon="edit"
    >
    </zyl-input>
    
    <zyl-input 
      v-model="value"
      type="text"
      placeholder="请输入内容" 
      name="username"
      suffix-icon="edit"
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
