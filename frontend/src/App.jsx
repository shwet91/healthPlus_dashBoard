
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {


  return (
   <div className='w-screen h-screen bg-pink-100'>
       <Outlet></Outlet>
   </div>
  )
}

export default App
