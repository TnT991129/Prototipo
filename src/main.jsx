import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './components/NavBar.jsx'
import Home from './components/Hero.jsx'
import PageII from './components/Page-II.jsx'
import LG from './components/LogoClouds.jsx'
import Market from './components/Marketplace.jsx'
import About from './components/About.jsx'
import Footer from './components/footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Home />
    <PageII />
    <LG />
    <Market />
    <About />
    <Footer />
    <App />
  </StrictMode>,
)
