
import './App.css'
import { Outlet, useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()

  return (
   <div className='w-screen h-screen bg-pink-100'>
  
       <Outlet></Outlet>
       <button className='m-28 bg-cyan-400 p-4 rounded-2xl' onClick={() => navigate("/home")}>Start Demo</button>
   </div>
  )
}

export default App
