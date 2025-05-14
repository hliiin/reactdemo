// 给第二步创建可以引用的路由表
import Layout from '../pages/Layout'
import Login from '../pages/Login'
import Home from '../pages/Home'
import About from '../pages/About'
import NotFound from '../pages/NotFound'

import Goods from '../pages/Goods'

import GoodsList from '../pages/GoodsList'
import Counter from '../pages/Counter'

import Channels from '../pages/Channels'
import { Route, Routes } from 'react-router-dom'
// 引入保护路由的组件
import ProductedRoute from '../components/ProductedRoute'

import Cart from '../pages/Cart'

import Books from '../pages/Books'

// 1. 配置路由表

// 注意： 需要被保护的路由 添加一个标识符 requiresAuth(这是自己取得名字)，  属性值为true、false,  
const router = [
  {
    path:'/',
    element:<Layout></Layout>,
    children:[
      {
        path:'/home',
        element:<Home />,
        // index:true
      },
      {
        path:'/about',
        element:<About></About>,
        requiresAuth:true,
      },
    ]

  },
  {
    path:'/login',
    element:<Login />
  },
  //   路径： * 表示 用户输入除了声明外的路由， 都会跳转到NotFound页面
  {
    path:'*',
    element:<NotFound />
  },
  {
    path:'/goods/:ids/:names',
    element:<Goods />,
    // 需要被保护的 路由 ，标识符设置为true, 不需要保护的就为false或者不添加标识符就可以
    requiresAuth:true,
  },
  {
    path:'/goodslist',
    element:<GoodsList />,
    requiresAuth:true,

  },
  {
    path:'/counter',
    element:<Counter />
  },
  {
    path:'/channels',
    element:<Channels />
  },
  {
    path:'/cart',
    element:<Cart />
  },
  {
    path:'/books',
    element:<Books />
  }

]

// 2. 进行路由守卫的筛选----调用保护路由的组件
const RouteList = () => {
  return (
    <Routes>
      {/* 需要循环遍历路由表，去展示，并且要判断哪些路由需要保护 */}
      {router.map((item,index) => {
        // 第一种， 一级路由有子路由的情况
        if(item.children) {
          return (
            // 有子路由的一级路由渲染
            <Route key={index} path={item.path} element={<ProductedRoute element={item.element} requiresAuth={item.requiresAuth}></ProductedRoute>}>
              {/* 二级路由的渲染和判断 */}
              {item.children.map((child,index) => {
                return <Route key={index} path={child.path} element={<ProductedRoute element={child.element} requiresAuth={child.requiresAuth}></ProductedRoute>}></Route>
              })}
            </Route>
          )
        } else {
          // 第二种： 没有子路由的一级路由,,  用到了组件传值
          return (
            <Route key={index} path={item.path} element={<ProductedRoute element={item.element} requiresAuth={item.requiresAuth}></ProductedRoute>}></Route>
          )
        }
      })}
    </Routes> 
  )
}


// 3. 抛出筛选后的路由组件----去到App.js里渲染该组件
export default RouteList;