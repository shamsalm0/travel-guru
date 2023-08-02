import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BackGroundProvider from './Context/BackGroundProvider/BackGroundProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BackGroundProvider>
      <App />
      </BackGroundProvider>
  </React.StrictMode>,
)
