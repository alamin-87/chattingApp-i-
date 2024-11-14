import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import app from './firebase.config'
import { ToastContainer, toast } from 'react-toastify';
import Home from './Pages/Home'
import ForgetPass from './Components/ForgetPass/ForgetPass'
import LayoutOne from './Components/Layouts/LayoutOne'

function App() {
  const [count, setCount] = useState(0)
  const Myrouter=createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<LayoutOne/>}>
       <Route path='/' element={<Home/>}/>
      </Route>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/forgetPassword' element={<ForgetPass/>}/>
    </Route>
  ))

  return (
    <>
     <RouterProvider router={Myrouter}/>
     <ToastContainer />
    </>
  )
}

export default App
