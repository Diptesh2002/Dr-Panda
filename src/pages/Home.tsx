import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Find a doctor near you</h1>
      <p className="mb-6">Search and book appointments quickly.</p>
      <Link to="/search" className="inline-block bg-blue-600 text-white px-4 py-2 rounded">Search Doctors</Link>
    </div>
  )
}
