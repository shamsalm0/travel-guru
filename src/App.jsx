import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'
import './Background/Background.css'
function App() {
  

  return (
    < >
    
    <RouterProvider router={router}></RouterProvider>
    
     
    </>
  )
}

export default App
