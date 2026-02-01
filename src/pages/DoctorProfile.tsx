import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BookingModal from '../components/BookingModal'
import { fetchJSON } from '../services/api'

export default function DoctorProfile() {
  const { id } = useParams()
  const [doc, setDoc] = useState<any | null>(null)

  useEffect(() => {
    if (!id) return
    fetchJSON(`/api/doctors/${id}`).then(setDoc).catch(() => setDoc(null))
  }, [id])

  if (!doc) return <div>Loading doctor...</div>

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">{doc.name}</h2>
      <p className="mb-4">{doc.department} · Rating: {doc.rating}</p>
      <BookingModal />
    </div>
  )
}
