import React from 'react'
import { useParams } from 'react-router-dom'
//  使用： useParmas() 获取路径中的动态参数
// 2.  引入商品列表
import goods from '../data/goods'


export default function Goods() {
  // 1. 获取路径中传递的参数， 在这里只需要获取路径中的动态参数ids就可以
  const {ids} = useParams()
  // const parmas = useParams()
  // console.log(parmas); //{ids: '4', names: '三国演义'}

  // 3. 根据路径中参数的ids的具体值，来查找出商品列表中符合条件的商品进行展示
  // 注意： useParmas() 获取 到的路径参数都是字符串， 为了严格一些，我们将使用=== 对路径参数进行类型转换
  // product是获取到符合条件的那一条商品信息， 就是路径中的ids的值根商品列表goods中的某个id相等了，就把这条数据信息赋值给product,然后在页面渲染
  const product = goods.find((item) => item.id === Number(ids) )
  console.log(product);
  
  // 5. 稍微做一个修改， 添加个判断， 如果没找到这个商品， 就展示下面的商品没找到这句话
  if(!product) {
    return (
      <div>
        <h1>商品没找到</h1>
      </div>
    )
  }
  
  return (
    <div>
      <h1>我是商品详情页</h1>
      <div>
        {/* 4. 渲染商品信息 */}
        <h2>商品详情</h2>
        <p>书名:{product.name}</p>
        <img src={product.img} alt=""  width='300px' />
        <p>价格：{product.price}</p>
      </div>
    </div>
  )
}
