import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// 引入小仓库抛出的方法
import { addCount, decrement, increment } from '../store/modules/counterSlice'

// 该页面 使用counter仓库里的内容
//  案例--实现一个计数器 


export default function Counter() {
  // 1.1 获取仓库中的数据, 使用useSelector获取到小仓库里的数据
  const {count} = useSelector((state) => state.counter )

  // 1.2 能让页面使用小仓库抛出的方法---引入仓库的方法
  const dispatch = useDispatch()
  
  return (
    <div>
      <h1>这是一个计数器</h1>
      <button onClick={() => {dispatch(decrement())} } style={{width:'20px'}}>-</button>
      <button><span>{count}</span></button>
      <button onClick={() => {dispatch(increment())}} style={{width:'20px'}}>+</button>

      {/* 2. 实现 点击该按钮，能够改变仓库里count的初始值, 让count变成20 */}
      <button onClick={() => {dispatch(addCount(20))}}>点击让仓库的count 变成20</button>
    </div>
  )
}
