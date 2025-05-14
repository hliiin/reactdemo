import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./modules/counterSlice";
import channelReducer from "./modules/channelSlice";

// 做持久化处理 使用插件来实现----npm install redux-persist

// authReducer是 直接引入authSlice小仓库抛出东西时候自己命名的
import authReducer from './modules/authSlice'

import cartReducer from './modules/cartSlice'

// 和持久化相关的内容引入
import {persistReducer,persistStore }from "redux-persist";
import storage from 'redux-persist/lib/storage' 
import { combineReducers } from "redux";


// 将所有的小仓库 放在一起抛出去
// const store = configureStore({
//   reducer: {
//     // 第一个小仓库
//     counter:counterReducer,
//     channel:channelReducer,
//     auth:authReducer,
//     // 购物车仓库
//     cart:cartReducer,
//   }
// })

// 1. 做持久化配置
const persistConfig = {
  key:'roots', // 持久化存储再控制台展示的名字， 最好和项目名一致
  storage, // 持久化存储的位置， 默认就是loacalStorage
}
// 2. 组合小仓库-reducer
const rootReducer = combineReducers({
  counter:counterReducer,
  channel:channelReducer,
  auth:authReducer,
  // 购物车仓库
  cart:cartReducer,
})

// 3. 创建持久化  reducer
const persistedreducer = persistReducer(persistConfig,rootReducer)

// 4.创建store
const store = configureStore({
  reducer:persistedreducer
})

const persistor = persistStore(store)




// 5.导出大仓库
// export default store;
export {store, persistor}  //  持久化配置完 去index.js入口文件

// 组件想使用仓库里的东西， 需要去index.js入口文件进行绑定