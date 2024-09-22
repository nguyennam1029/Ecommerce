import { Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"



function App() {


  return (
    <>
   <MainLayout>
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
   </MainLayout>
    </>
  )
}

export default App
