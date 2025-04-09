import React from 'react'
import Home from './Pages/Home'
import Skils from './Pages/Skils';
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import About from './Pages/About';


function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Navbar />  <Home/> <Footer/> </>,
    },
    
    {
      path: "/Contact",
      element: <> <Navbar /> <Contact/> <Footer/> </>,
    },
   
    {
      path: "/skills",
      element: <> <Navbar /> <Skils/> <Footer/> </>,
    },
    
    {
      path: "/about",
      element: <> <Navbar /> <About/> <Footer/> </>,
    },
    
    

  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App