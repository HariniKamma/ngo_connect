import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import GetInvolved from './pages/GetInvolved'
import Footer from './components/Footer'


export default function App(){
return (
<div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-soft">
<Navbar />
<main className="flex-1 w-full max-w-[var(--max-w)] mx-auto px-6 py-10">
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/about" element={<About/>} />
<Route path="/get-involved" element={<GetInvolved/>} />
</Routes>
</main>
<Footer />
</div>
)
}