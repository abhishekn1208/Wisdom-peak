import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Search from './Components/Search/Search'
import NotFound from './Components/NotFoundPage/NotFound'

function App() {


  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/search' element={<Search/>}/>
    <Route path='*' element={<NotFound/>}/>
    </Routes>
    
    </>
  )
}

export default App
