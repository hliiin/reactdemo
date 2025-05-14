import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, updateQuantity } from "../store/modules/cartSlice";

// 商品页面： 展示所有商品的， 有按钮可以点击添加到购物车页面， 但是这里需要将选中的商品加到仓库， 然后购物车从仓库获取商品再展示
function ProductList() {
  // 1.1  准备商品
  const products = [
    { id: 1, name: "手机", price: 10 },
    { id: 2, name: "电脑", price: 20 },
    { id: 3, name: "鞋子", price: 5 },
    { id: 4, name: "电视", price: 30 },
  ];
  // 1.3 引用仓库的添加商品的方法，
  const dispatch = useDispatch()
  return (
    <div>
      <h2>这是商品页--商品信息</h2>
      {/* 1.2 渲染商品 */}
      {products.map((product) => (
        <div key={product.id}>
          <span>商品名字：{product.name}</span>------<span>价格：{product.price}</span>---
          {/* 1.4 按钮调用方法， 将当前选中的商品添加到购物车items数组去 */}
          <button onClick={() => dispatch(addItem(product))}>添加到购物车</button>
        </div>
      ))}
    </div>
  );
}

export default function Cart() {
  // 2.1 购物车页面需要引入仓库里的数据，items 和total
  const {items,total} = useSelector((state) => state.cart)

  // 2.4 引入移除购物车的  方法
  const dispatch = useDispatch()
  return (
    <div>
      {/* 这是展示商品列表的 */}
      <ProductList></ProductList> <hr />

      <h1 style={{ marginTop: "40px" }}>这是购物车的内容</h1>
      {/* 2.2 循环遍历仓库里被添加的 商品 */}
      {items.map((item) => (
        <div key={item.id}>
        <span>添加的商品名字：{item.name}</span>------<span>价格：{item.price}</span>--
        {/* 2.6  实现输入框这边也可以修改商品的数量 使用input的 onChange属性 */}
        <input style={{ color: "red" }} type="number" min={1} value={item.quantity}
          onChange={(e) => dispatch(updateQuantity({id:item.id, quantity:e.target.value}))}  />
        {/* 2.5 引用方法, 传递要移除的商品的信息 */}
        <button onClick={() => dispatch(removeItem(item.id))}>移除商品</button>
      </div>
      ))}

      {/* 2.3  商品的总价 */} 
      <h3>总价为：{total}</h3>

      
    </div>
  );
}
