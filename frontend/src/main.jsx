import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter , RouterProvider } from 'react-router-dom'

import DashBoard from './pages/DashBoard.jsx'
import Home from './pages/Home.jsx'
import Navbar from './pages/Test.jsx'
import HealthApp from './pages/Slider.jsx'
import Grievances from './components/Grievances/Grievances.jsx'
import ProgramInfoWithForm from './components/Program.jsx'
import store from './store/store.js'
import { Provider } from 'react-redux'
import Store from './components/Store.jsx'
import JoinProgramForm from './components/program/JoinProgram.jsx'
import GetProgram from './components/program/GetProgram.jsx'
import TaskList from './components/Task/TaskViewer.jsx'

const router = createBrowserRouter([
  {
    path: "",
    element : <App />,
    children : [
      {
        path : "/home",
        element : <Home></Home>
      },
      {
        path : "/profile",
        element: <DashBoard></DashBoard>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} ></RouterProvider>
    </Provider>
  </StrictMode>,
)
