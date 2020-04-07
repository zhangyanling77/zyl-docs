<template>
  <div>
    <zyl-row>
      <zyl-col :span="24">
        <div class="grid-content bg-purple-dark">col-24</div>
      </zyl-col>
    </zyl-row>
  </div>
</template>

<style lang="scss">
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
