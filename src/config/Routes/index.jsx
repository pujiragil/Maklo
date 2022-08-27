import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, Register, Login } from "../../pages"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="register" element={<Register/>} />
        <Route path="login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router