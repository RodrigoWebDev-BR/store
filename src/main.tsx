import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Footer } from './components/Footer'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>,
)
