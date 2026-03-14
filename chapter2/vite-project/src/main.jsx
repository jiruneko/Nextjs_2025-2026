import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const root = createRoot(document.getElementById('root'))
// setInterval(() => {
//   root.render(
//     <div>
//     <p>こんにちは、世界！</p>
//     <p>初めまして、React</p>
//     </div>
//   )
  const name = '鈴木'
  root.render(
    <p>こんにちは、{name}です！</p>
  )