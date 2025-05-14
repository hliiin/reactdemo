//  这个里面是 存购物车的数据
// 案例：  再商品页添加商品到仓库， 然后仓库存储的商品再购物车页面展示

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name:'cart',
  initialState: {
    items:[],// 购物车的商品列表
    total:0, // 所有商品价格
  },
  reducers:{
    // ------ 添加商品到仓库
    addItem:(state,action) => {
      // 1.1 存储商品信息， 需要先来一个判断， 要看购物车列表items里面有没有要加入购物的的这个商品存在 使用find()
      const addproduct = state.items.find((item) => item.id === action.payload.id ) //action.payload 是Cart.jsx上面组件使用additem方法时候传递的product参数
      if(!addproduct) {
        // 1.2 如果不存在，就说明新加入的商品是 第一次加入购物车， 所以，直接将该商品加到items里面,并且加一个数量属性为1
        state.items.push({...action.payload, quantity:1})
      } else {
        // 1.3 如果，addproduct存在，就证明你新加入购物的商品，已经再购物车里有了， 那么就将购物车里该商品的数量 +1
        addproduct.quantity += 1
      }

      // 1.4 计算总价
      // state.total = state.total + action.payload.price
      state.total += action.payload.price

    },
    // --------移除购物车商品
    removeItem(state,action) {
      // 2.1 根据调用移除购物车的方法传递的商品id  再仓库items里找， 找到该商品后，就删除
      // findIndex()  用于查找符合条件的第一个元素的索引值，如果找到符合条件的元素， 就会返回该元素的索引值， 如果没找到就会返回-1
      const productIndex = state.items.findIndex((item) => item.id === action.payload ) //action.payload 其实就是Cart.jsx调用方法传递的item.id那个参数

      // 2.3 如果productIndex存在并且 >-1  就等说找到该商品了，因为索引值都是从0开始的，只要数值>-1 或者 >=0  就证明商品存在； 直接移除就好
      if(productIndex > -1) {
        // 需要根据索引值获取到该商品
        const remove = state.items[productIndex]
        // 将该商品移除仓库了
        state.items.splice(productIndex,1)
        // 移除仓库并计算了总价
        // state.total = state.total - remove.price * remove.quantity
        state.total -= remove.price * remove.quantity
      } 

    },

    // --------------- 改变购物车 input输入框的数量, 让输入框也可以改变数量并和 仓库一致
    updateQuantity:(state,action) => {
      // 此时action.payload = {id:item.id, quantity:e.target.value}
      const {id,quantity} = action.payload
      const product = state.items.find((item) => item.id === id)
      // 如果找到了该商品， 就将该商品的数量修改为传递过来的 数量
      if(product) {

        // 用仓库里原有商品的数量 和新传递的数量差值， 计算total
        const quantityDiff = quantity - product.quantity
        state.total += quantityDiff * product.price
        product.quantity = quantity


      }
    }
  }
})

export const {addItem, removeItem,updateQuantity} = cartSlice.actions
export default cartSlice.reducer