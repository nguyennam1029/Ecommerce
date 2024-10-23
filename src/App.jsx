import { Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import DetailPage from "./pages/DetailPage"
import ShopPage from "./pages/ShopPage"



function App() {


  return (
    <>
   
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/detail/:id' element={<DetailPage />} />
        <Route path='/shop' element={<ShopPage />} />

      </Routes>
   
    </>
  )
}

export default App
