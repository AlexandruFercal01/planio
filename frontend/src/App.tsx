import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element={<div> Home page </div>}></Route>
      <Route path='/calendar' element={<div>Calendar</div>}/>
    </Routes>
  )
}

export default App
