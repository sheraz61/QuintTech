import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Root from './Root'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
 <Route path='' element={<Home />} />
 <Route path='/about' element={<About />} />
 <Route path='/service' element={<Services/>} />
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