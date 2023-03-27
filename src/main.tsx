import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { Header } from './layouts/Header'
import { Main } from './components/Main'
import { Footer } from './layouts/Footer'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>,
)
