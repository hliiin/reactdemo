//  这个里面是 存放和登录页相关的内容
// 案例：  想要实现：判断登陆状态，去访问路由， 如果登陆了，就能访问所有的路由， 如果没有登陆，那么被保护起来的路由就无法访问到

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name:'auth',
  initialState: {
    // 这是登陆状态， false表示未登录， true就表示登陆了
    isLogin:false
  },
  reducers:{
    // 登陆方法
    login(state) {
      state.isLogin = true
    },
    // 退出登陆方法
    logout:(state) => {
      state.isLogin = false
    }
  }
})

export const {login, logout} = authSlice.actions
export default authSlice.reducer