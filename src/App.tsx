import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import DoctorProfile from './pages/DoctorProfile'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="font-bold text-xl">Doctor Appointments</Link>
          <nav>
            <Link to="/search" className="mr-4">Search</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/doctors/:id" element={<DoctorProfile />} />
        </Routes>
      </main>

      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 py-4 text-center">© 2026 Doctor App</div>
      </footer>
    </div>
  )
}
