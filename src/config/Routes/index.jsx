import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "../../components/layout/navbar"
import { Register, Login, Home } from "../../pages"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home/>}/>
        </Route>
        <Route path="register" element={<Register/>} />
        <Route path="login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router