import React from 'react'
import ReactDOM from 'react-dom/client'

// import App from './App'
import { GifExpertApp } from './GifExpertApp'
import '../src/styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App />    */}
    <GifExpertApp />
  </React.StrictMode>
)
