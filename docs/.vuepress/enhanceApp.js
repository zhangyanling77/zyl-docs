import Vue from 'vue';
import Element from 'element-ui'; // 引入elementUi
import 'element-ui/lib/theme-chalk/index.css';

import hljs from 'highlight.js';
import 'highlight.js/styles/googlecode.css'; //样式文件

import zylUI from 'zyl-ui'; // 要编写对应的文档的包
import 'zyl-ui/dist/zyl-ui.css';

Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block);
  })
});

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  // 做一些其他的应用级别的优化
  Vue.use(Element);
  Vue.use(zylUI);
}
