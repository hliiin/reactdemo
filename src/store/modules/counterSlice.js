// 创建小仓库， 存放count相关的内容

import { createSlice } from "@reduxjs/toolkit";

// 1. 创建一个store
const counterSlice = createSlice({
  // 1.1定义一个名字：
  name:'counter',
  // 1.2 初始化 数据state
  initialState:{
    count:10, // 声明的存放数据，初始值为10
    // taslist:['react']
  },
  // 1.3  定义修改数据的方法
  reducers: {
    // 方法1： 让count +1 
    increment(state) {
      state.count ++
    },

    // 方法2：  让count -1
    decrement: (state) => {
      state.count --
    },

    // 方法3. 实现页面和仓库之间的交互----页面能够该边仓库存储的数据， 页面调用的时候需要传递一个参数
    addCount(state,action) {
      state.count = action.payload  // action.payload其实就是外部组件（页面）传递过来的数据
    }
  }

})

// 2. 解构一下counterSlice身上的reduers里面放的方法， 其实这些方法都是属于actions的
const {increment,decrement,addCount} = counterSlice.actions

// 3. 获取reducer
const counterReducer = counterSlice.reducer

// 4. 将2和3的方法以及reducer抛出
export {increment,decrement,addCount}
export default counterReducer
