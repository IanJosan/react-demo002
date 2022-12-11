import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Layout'
import Login from './pages/Login'
function App() {
  return (
    <Router>
      {/* <div className="App">APP跟组件</div>
      <Link to="/login">登录</Link>
      <Link to="/home">首页</Link> */}
      {/*  路由规则 */}
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  )
}

export default App
