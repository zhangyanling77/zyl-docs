<template>
  <div>
    <zyl-container>
      <zyl-header>Header</zyl-header>
      <zyl-main>Main</zyl-main>
    </zyl-container>
    <br />
    <zyl-container>
      <zyl-header>Header</zyl-header>
      <zyl-main>Main</zyl-main>
      <zyl-footer>Footer</zyl-footer>
    </zyl-container>
    <br />
    <zyl-container>
      <zyl-aside width="200px">Aside</zyl-aside>
      <zyl-main>Main</zyl-main>
    </zyl-container>
    <br />
    <zyl-container>
      <zyl-header>Header</zyl-header>
      <zyl-container>
        <zyl-aside width="200px">Aside</zyl-aside>
        <zyl-main>Main</zyl-main>
      </zyl-container>
    </zyl-container>
    <br />
    <zyl-container>
      <zyl-header>Header</zyl-header>
      <zyl-container>
        <zyl-aside width="200px">Aside</zyl-aside>
        <zyl-container>
          <zyl-main>Main</zyl-main>
          <zyl-footer>Footer</zyl-footer>
        </zyl-container>
      </zyl-container>
    </zyl-container>
    <br />
    <zyl-container>
      <zyl-aside width="200px">Aside</zyl-aside>
      <zyl-container>
        <zyl-header>Header</zyl-header>
        <zyl-main>Main</zyl-main>
      </zyl-container>
    </zyl-container>
    <br />
    <zyl-container>
      <zyl-aside width="200px">Aside</zyl-aside>
      <zyl-container>
        <zyl-header>Header</zyl-header>
        <zyl-main>Main</zyl-main>
        <zyl-footer>Footer</zyl-footer>
      </zyl-container>
    </zyl-container>
  </div>
</template>

<style lang="scss">
 .zyl-header, .zyl-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .zyl-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .zyl-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .zyl-container {
    margin-bottom: 40px;
  }
  
  .zyl-container:nth-child(5) .zyl-aside,
  .zyl-container:nth-child(6) .zyl-aside {
    line-height: 260px;
  }
  
  .zyl-container:nth-child(7) .zyl-aside {
    line-height: 320px;
  }
</style>
