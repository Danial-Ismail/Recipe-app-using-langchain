import './App.css'
import ChefBot from './components/ChefBot'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chefbot' element={<ChefBot />} />
      </Routes>
    </>
  )
}

export default App
