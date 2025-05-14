import React, { useState } from 'react'
// 1. 引入axios  用来请求后端接口的
import axios from 'axios'

// 这个页面是和后端接口连接的页面
export default function Books() {
  // 3.1.1 定义一个变量，，用来接收获取到的数据
  const [books, setBooks] = useState([])

  // 3. 定义获取接口数据
  // 3.1  获取数据， 访问接口数据
  async function getBook() {
    // const res = await axios.get('http://127.0.0.1/getGoods')
    // console.log(res);
    try{
      // 当使用axios向接口请求获取数据 使用get
      const res = await axios.get('http://127.0.0.1/getGoods')
      console.log(res.data,'获取数据'); //res.data是一个数组对象的形式
      setBooks(res.data)
    }catch(err) {
      console.log(err);
    }
  }

// -------------------------------------------------------------------
  // 3.2 添加数据----新增到了数据库
  const data = {
    name:'史记',
    author:'司马迁11',
    price:29
  }

  async function addBook() {
    // 当使用axios向接口发送数据 要使用post方法
    const res = await axios.post('http://127.0.0.1/addGood',{data})
    console.log(res);  // 存储成功
  }

  // 3.3 根据数据的name或者_id去查询书 
  async function getBookByname() {
    const res = await axios.get('http://127.0.0.1/getGoodByName',{params:{_id:'68215ef8ff01e539897b8435'}})
    console.log(res.data);
  }

  // 3.4 根据数据_id删除指定数据
  async function deleteBook() {
    const res = await axios.delete('http://127.0.0.1/delete/68214ebfc3bbe2c8160ac14f')
    console.log(res); // 删除成功
  }

  return (
    <div style={{margin:'30px'}}>
      {/* 2. 使用获取接口的操作 */}
      <button onClick={getBook}>获取数据库的goods集合书籍信息getBook</button>
      <button onClick={addBook}>添加新书addBook</button>
      <button onClick={getBookByname}>通过书名查找这本书getBookByname</button>
      <button onClick={deleteBook}>通过_id删除书deleteBook</button>




      {/* 3.1.2  使用接口数据渲染在页面中  */}
      <h1>渲染获取到的数据</h1>
      {books.map((item,index) => (
        <li key={index}>
        <p>bookname:{item.name}</p>
        <p>author:{item.author}</p>
        <p>price:{item.price}</p><hr />
      </li>
      ))}
    </div>
  )
}
