import React from 'react'
import { Link } from 'react-router-dom'

export default function DoctorCard({ doctor }: { doctor?: any }) {
  const name = doctor?.name ?? 'Dr. Jane Doe'
  const dept = doctor?.department ?? 'General'
  const id = doctor?.id ?? '1'

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">{dept}</p>
      <div className="mt-4 flex items-center justify-between">
        <Link to={`/doctors/${id}`} className="text-blue-600">View profile</Link>
        <button className="bg-green-600 text-white px-3 py-1 rounded">Book</button>
      </div>
    </div>
  )
}
