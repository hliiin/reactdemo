import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../store/modules/authSlice'
import { useNavigate } from 'react-router-dom'




export default function Login() {

  //1.1 需要引入auth仓库里面的方法
  const dispatch = useDispatch()
  const {isLogin} = useSelector((state) => state.auth )
  console.log(isLogin);

  // 1.3 登陆成功后， 默认跳转到home页面, 自己定义一个方法
  const navigate = useNavigate()
  const Login = () => {
    dispatch(login())
    navigate('/goodslist')
  }
  
  return (
    <div>
      {/* 1.2 调用方法 */}
      <h1>这是login页面</h1>
      <button onClick={Login}>点击登陆</button>
      <button onClick={() => dispatch(logout())}>点击退出</button>

    </div>
  )
}
