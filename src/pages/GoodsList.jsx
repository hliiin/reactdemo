import React from 'react'
// 商品列表页
//  这个页面是展示所有 的书籍页面 --> 实现： 点击某本书，会跳转到Goods页面，商品详情页，展示这本书的信息-----使用 路由的动态参数实现

// 1.引入数据
import goods from '../data/goods'
import { Link } from 'react-router-dom'


export default function GoodsList() {
  // 声明样式
  const styles = {
    backgroundColor:'pink',
    fontSize:'20px',
    marginBottom:'10px'
  }
  return (
    <div>
      <h1>这是所有的书籍</h1>
      <ul style={{backgroundColor:'blue', width:'200px'}}>
        {/* 2. 渲染数据列表 */}
        {goods.map((item) => (
          <li key={item.id}  style={styles}>
            {/* 3. 点击书名携带参数 跳转到Goods页面 */}
            <Link to={`/goods/${item.id}/${item.name}`}>
              <p>书名：{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
