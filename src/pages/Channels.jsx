import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getChannels } from '../store/modules/channelSlice'
// 这个页面是和channelSlice仓库相关的内容

// 在该页面调用 redux中声明的请求接口的方法， 并把存在仓库里的channelList的数据渲染在页面


export default function Channels() {
  // 1、 获取小仓库的 channelList数组， 和 方法 getChannels
  const {channelList} = useSelector((state) => state.channel )
  const dispatch = useDispatch()
  // 2.调用小仓库里请求接口的方法 , 就可以将获取到接口数据 传递给仓库里的channleList
  useEffect(() => {
    dispatch(getChannels())
  },[dispatch])
  return (
    <div>
      {/* 3. 使用仓库里的channelList */}
      {channelList.map((item) => (
        <li>{item.id}-----{item.name}</li>
      ))}

    </div>
  )
}
