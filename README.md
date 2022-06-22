<p align="center">
  <img width="100" src="https://i.loli.net/2021/07/07/jV4wc98UW5ELlCS.png">
</p>

<h1 align="center">JingUI</h1>

<div align="center">一款基于 React 开发的移动端UI组件库</div>

## 💫 特性

-   基于 `React` 开发 UI 组件
-   支持 Web 开发
-   支持按需引入
-   支持 TypeScript

## 📦 安装

```bash
npm install jing-ui
```

```bash
yarn add jing-ui
```

## 🎀 使用

```jsx
import { Button } from 'jing-ui';

const App = () => (
    <>
        <Button>Click Jing</Button>
    </>
);
```

引入样式：

```jsx
import 'jingui/dist/jing.css';
```

## 🥡 按需加载

`jingui` 的 JS 部分默认支持 tree shaking。

通过配置 `babel-plugin-import` 进行 CSS 的按需加载

## 🧑🏻‍💻 本地开发

```bash
$ git clone git@github.com:johanazhu/jingui.git
$ cd jingui
$ npm install
$ npm start
```

### 常用命令

1. `npm start` 在本地运行 Annar 的网站
2. `npm run lint` 检查代码风格
3. `npm run build` 编译 TypeScript 代码到 esm、web 以及 dist 目录

## 🍭 文档

[官方文档](http://jingui.azhubaby.com/)
