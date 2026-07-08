
import './App.css'

import AddProduct from './pages/Home/AddProduct/AddProduct'

import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './pages/Home/Home'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addProduct' element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
