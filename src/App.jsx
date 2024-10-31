import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'

function App() {
  const [count, setCount] = useState(0)
  const Myrouter=createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Route>
  ))

  return (
    <>
     <RouterProvider router={Myrouter}/>
    </>
  )
}

export default App
