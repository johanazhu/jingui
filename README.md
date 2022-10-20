# JingUI

A React UI library
[![Wei Design](https://img.shields.io/npm/v/@jojobo/jing-ui.svg?style=flat-square)](https://www.npmjs.com/package/@jojobo/jing-ui)

---

-   🔭 [Umi](https://umijs.org/)
-   💪 [React](https://reactjs.org/)
-   🔥 [TypeScript](https://www.typescriptlang.org/)
-   :happy: [dumi](https://d.umijs.org/zh-CN)

[快速开始](https://jingui.azhubaby.com/)

## 安装

node：>=16.0.0

### npm

这里推荐`pnpm`进行安装

```sh
pnpm install @jojobo/jing-ui --save
```

https://cdn.jsdelivr.net/npm/@wei_design/web-vue/)

## 使用

### 全局引入

在`main.js`中

```js
import { createApp } from 'vue';
import App from './App.vue';
// 完整引入组件库
import WeDesign from '@wei_design/web-vue';

const app = createApp(App);
// 全局安装
app.use(WeDesign).mount('#app');
```

组件当中

```vue
<WeButton :loading="true">按钮组件</WeButton>
```

### 按需引入

`main.js`中

```js
import { createApp } from 'vue';
import App from './App.vue';
// 按需引入
import { Button } from '@wei_design/web-vue';

const app = createApp(App);

app.use(Button).mount('#app');
```

组件当中

```vue
<WeButton :loading="true">按钮组件</WeButton>
```

有问题欢迎 issue...
