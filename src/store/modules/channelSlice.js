// 创建小仓库， 这里是访问接口数据的

import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

// 1. 创建一个store
const channelSlice = createSlice({
  // 1.1定义一个名字：
  name:'channel',
  // 1.2 初始化 数据state
  initialState:{
    channelList:[]
  },
  // 1.3  定义修改数据的方法
  reducers: {
    setChannels(state,action){
      state.channelList = action.payload
    }
  }
})

// 2.需要将方法解构一下，才能在该文件里使用， 如果是外部的组件要用，就需要抛出去
const {setChannels}  = channelSlice.actions

// 5. 在redux里面实现异步请求---接口请求数据---需要用到axios--需要安装 npm i axios
//  http://geek.itheima.net/v1_0/channels
const getChannels = () => {
  // 5.1
  //使用async await 拿到请求接口的数据
  return async (dispatch) => {
    const res = await axios.get('http://geek.itheima.net/v1_0/channels')
    console.log(res); // 最终需要获取到的是 res.data.data.channels
    // 使用dispatch调用actions里的方法， 将获取到的数据 传递给state里面的channleList
    dispatch(setChannels(res.data.data.channels))
  }
}

// 5.2 抛出异步请求接口的方法
export {getChannels}





// 3. 获取reducer
const channelReducer = channelSlice.reducer

// 4.抛出redcer
export default channelReducer




