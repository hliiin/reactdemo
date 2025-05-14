import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
// 这是保护路由的组件 ----作为子路由被路由列表 使用的 


export default function ProductedRoute({element, requiresAuth}) {
  // 根据父组件路由表那边传递的参数， 进行路由保护的判断
  const {isLogin} = useSelector((state) => state.auth)
  // console.log(isLogin);
  
  // 功能：  如果当前的页面需要登陆后才能访问（也就是说有标识符并且为true）, 且用户没有登陆的时候，  就重定向到登录页
  if(requiresAuth && !isLogin) {
    return <Navigate to={'/login'}></Navigate>
  } else {
    return element
  }
  
}
