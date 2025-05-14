import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// // 1.1 引入创建的大仓库store
// import store from "./store/store";
// import { Provider } from "react-redux";

// 持久化配置后需要引入一些内容
import {store, persistor} from './store/store'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // 1.2 将所有的组件在Provider里面包裹，并于store连接
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {/* // 路由的第二种写法: 第一步在入口文件index.js组件写BrowserRouter,
    包裹根组件App.js */}
    <BrowserRouter>
      {/* 引入根组件App.js */}
      <App />
    </BrowserRouter>
    </PersistGate>
    
  </Provider>
);
// <React.StrictMode> 会对函数组件执行一次“额外的渲染”，来帮助你发现副作用或潜在的 bug。
// 开发时建议保留，它能帮你发现副作用写得不对的地方（比如 useEffect 中写了不该重复执行的逻辑）
// 调试时可以临时去掉，方便观察真实渲染行为
