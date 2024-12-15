import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Componments/LayOut/Layout.jsx'
import Home from './Componments/Home/Home.jsx'
import AboutUS from './Componments/AboutUs/AboutUS.jsx'
import Contact from './Componments/Contact/Contact.jsx'
import GitHub from './Componments/GitHub/GitHub.jsx'
import { githubInfoLoader } from './Componments/Loader/Loader.js'

var router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about-us' element={<AboutUS />} />
      <Route path='Contact' element={<Contact />} />
      <Route loader={githubInfoLoader }  path='git-hub' element={<GitHub />} />
    </Route>

  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
