
import './App.css'
import Footer from './Components/Footer/Footer'
import Nav from './Components/Navbar/Nav'
import { Routes,Route } from 'react-router-dom'
import HomePage from './Components/Pages/HomePage'
import About from './Components/Pages/About'
import Carriers from './Components/Pages/Carriers'
import Contact from './Components/Pages/Contact'
import Solution from './Components/Pages/Solution'

function App() {

  return (
    <>
     
      <Nav></Nav>
      <Routes>
       
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/about-us' element={<About></About>}></Route>
         <Route path='/solutions' element={<Solution></Solution>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
         <Route path='/carriers' element={<Carriers></Carriers>}></Route>
        </Routes>
        <Footer></Footer>
    
    </>
  )
}

export default App
