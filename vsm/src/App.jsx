
import './App.css'
import Footer from './Components/Footer/Footer'
import Nav from './Components/Navbar/Nav'
import { Routes,Route } from 'react-router-dom'
import HomePage from './Components/Pages/HomePage'
import About from './Components/Pages/About'

function App() {

  return (
    <>
     
      <Nav></Nav>
      <Routes>
       
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        </Routes>
        <Footer></Footer>
    
    </>
  )
}

export default App
