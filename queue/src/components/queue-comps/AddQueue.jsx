import { useState } from "react"

const AddQueue = ({ onAdd }) => {
  const [customer, setCustomer] = useState("")
  const [status, setStatus] = useState("waiting")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!customer.trim()) return

    onAdd({
      name: customer.trim(),
      status,
    })

    setCustomer("")
    setStatus("waiting")
  }

  return (
    <div className="w-full max-w-xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Add to Queue
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Enter customer details to add them to the queue.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Customer Name
          </label>
          <input
            type="text"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            placeholder="Enter customer name"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm transition outline-none focus:border-black focus:ring-2 focus:ring-gray-100"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Queue Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 transition outline-none focus:border-black focus:ring-2 focus:ring-gray-100"
          >
            <option value="waiting">Waiting</option>
            <option value="in-service">In Service</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-[0.99]"
        >
          + Add to Queue
        </button>
      </form>
    </div>
  )
}

export default AddQueue
