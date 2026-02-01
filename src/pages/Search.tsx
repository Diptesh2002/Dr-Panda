import React from 'react'
import DoctorCard from '../components/DoctorCard'
import { useDoctors } from '../hooks/useDoctors'

export default function Search() {
  const { data, isLoading, error } = useDoctors()

  if (isLoading) return <div>Loading doctors...</div>
  if (error) return <div>Error loading doctors</div>

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Search Doctors</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map((doc: any) => (
          <DoctorCard key={doc.id} doctor={doc} />
        ))}
      </div>
    </div>
  )
}
