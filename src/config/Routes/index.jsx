import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "../../components/layout/navbar"
import { Register, Login, Home, Transaction } from "../../pages"
import Chart from "../../pages/Chart"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home/>}/>
          <Route path="transactions" element={<Transaction/>}/>
          <Route path="chart" element={<Chart/>}/>
        </Route>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router