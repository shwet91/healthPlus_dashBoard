
import './App.css'
import { Outlet, useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()

  return (
   <div className='w-screen h-screen bg-pink-100'>
  
       <Outlet></Outlet>
       <button onClick={() => navigate("/home")}>Start Demo</button>
   </div>
  )
}

export default App
