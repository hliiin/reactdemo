import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <h1>这是首页</h1>

      {/* 给子路由准备路由出口--给二级路由准备出口 */}
      <Outlet />
    </div>
  )
}
