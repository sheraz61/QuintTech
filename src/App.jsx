import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Root from './Root'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/service' element={<Services />} />
      <Route path='/contact' element={< Contact/>} />
      <Route path='/portfolio' element={< Portfolio/>} />
    </Route>
  )
)
function App() {

  return (
    <div>
      <RouterProvider router={router} /> 
    </div>
  )
}

export default App