import React from 'react'

const DisplayQueue = ({ user = [], onUpdate, onDelete }) => {
  const statusStyles = {
    waiting: "bg-amber-50 text-amber-700 ring-amber-200",
    "in-service": "bg-blue-50 text-blue-700 ring-blue-200",
    completed: "bg-green-50 text-green-700 ring-green-200",
  }

  return (
    <div className="w-full max-w-3xl  rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customer Queue
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage your customers and their current status.
          </p>
        </div>

        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-700">
          {user.length} {user.length === 1 ? "Customer" : "Customers"}
        </span>
      </div>

      {user.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-300 px-4 py-12 text-center">
          <h3 className="font-semibold text-gray-900">
            No customers in queue
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Add a customer to get started.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {user.map((customer) => (
            <div
              key={customer.id}
              className="flex flex-col gap-4 rounded-xl border border-gray-200 p-4 transition hover:border-gray-300 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-700">
                  {customer.name?.charAt(0).toUpperCase()}
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    {customer.name}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">
                    ID: {customer.id}
                  </p>

                  <span
                    className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${
                      statusStyles[customer.status] ||
                      "bg-gray-100 text-gray-600 ring-gray-200"
                    }`}
                  >
                    {customer.status || "waiting"}
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => onUpdate?.(customer)}
                  className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 sm:flex-none"
                >
                  Update
                </button>

                <button
                  type="button"
                  onClick={() => onDelete?.(customer.id)}
                  className="flex-1 rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50 sm:flex-none"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default DisplayQueue

