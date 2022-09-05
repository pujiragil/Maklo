import Navbar from "../../components/layout/navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "../../context/theme-context"
import { Register, Login, Home, Transaction } from "../../pages"
import Chart from "../../pages/Chart"

const Router = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route index element={<Home/>}/>
            <Route path="transactions" element={<Transaction/>}/>
            <Route path="chart" element={<Chart/>}/>
          </Route>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default Router