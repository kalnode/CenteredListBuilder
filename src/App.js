import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './assets/App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Routeabout from './views/about'
import Routetool from './views/tool'

export default function App () {
    return (
        <div className="App">
            <header>
                <Header />
            </header>

            <main>
                <Routes>
                    <Route path="/about" exact element={<Routeabout/>}></Route>
                    <Route path="/tool" element={<Routetool/>}></Route>
                    <Route path="/" element={<Navigate replace to="/about" />}></Route>
                </Routes>
            </main>

            <footer>
                <Footer />
            </footer>

            <ScrollToTop />
        </div>
    )
}