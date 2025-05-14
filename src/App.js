
import "./App.css";

// 书写路由相关的内容
//  路由： 第二步 引入路由


// 1.1  先引入路由组件
import RouteList from  './router/router'

function App() {

  return (
    <div className="App" style={{ marginBottom: "40px" }}>
      {/* 1.2  使用引入的路由组件 */}
      <RouteList></RouteList>
    </div>
  );
}

export default App;
