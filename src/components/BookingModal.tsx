import React, { useState } from 'react'

export default function BookingModal() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button onClick={() => setOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded">Book a slot</button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded w-full max-w-md">
            <h3 className="text-lg font-semibold">Book an appointment</h3>
            <p className="text-sm text-gray-600">(Mock flow)</p>
            <div className="mt-4">
              <label className="block text-sm">Select date & time</label>
              <input type="datetime-local" className="mt-1 block w-full border rounded p-2" />
            </div>
            <div className="mt-6 flex justify-end">
              <button className="mr-2" onClick={() => setOpen(false)}>Cancel</button>
              <button className="bg-green-600 text-white px-4 py-2 rounded">Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
