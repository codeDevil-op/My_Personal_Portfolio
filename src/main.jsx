import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { lazy,Suspense } from 'react'
const About = lazy(()=>import('./pages/About/About.jsx'))
const Resume = lazy(()=>import('./pages/Resume/Resume.jsx'))
const Portfolio = lazy(()=>import('./pages/Portfolio/Portfolio.jsx'))
const Contact = lazy(()=>import('./pages/Contact/Contact.jsx'))

import Loader from './components/Loader/Loader.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
    {
      path:'/',
      element:<Suspense fallback = <Loader/> ><About/></Suspense>,
    },
    {
      path:'/resume',
      element:<Suspense fallback = <Loader/> ><Resume/></Suspense>,
    },
    {
      path:'/portfolio',
      element:<Suspense fallback = <Loader/> ><Portfolio/></Suspense>,
    },
    {
      path:'/contact',
      element:<Suspense fallback = <Loader/> ><Contact/></Suspense>,
    },
  ]
  },
    
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
