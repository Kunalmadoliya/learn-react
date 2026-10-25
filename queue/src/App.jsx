import { useState } from "react"
import AddQueue from "./components/queue-comps/AddQueue"
import DisplayQueue from "./components/queue-comps/DisplayQueue"

const App = () => {
  const [state, setState] = useState([])

  const addQueueFn = (customer) => {
    setState((prev) => [
      ...prev,
      {
        ...customer,
        id: Date.now(),
      },
    ])
  }

  const deleteQueueFn = (id) => {
    setState((prev) => prev.filter((customer) => customer.id !== id))
  }

  const updateQueue = (id, updatedData) => {
    setState((prev) =>
      prev.map((customer) =>
        customer.id === id ? { ...customer, ...updatedData } : customer
      )
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-7xl space-y-8">
        <header>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Queue Management App
          </h1>

          <p className="mt-2 text-gray-500">
            Add, update, and manage your customers efficiently.
          </p>
        </header>

        <main className="flex flex-col items-start gap-8 md:flex-row">
          <section className="w-full flex-1">
            <AddQueue onAdd={addQueueFn} />
          </section>

          <section className="w-full flex-1">
            <DisplayQueue
              user={state}
              onUpdate={updateQueue}
              onDelete={deleteQueueFn}
            />
          </section>
        </main>
        <section className="w-full flex-1 rounded-xl border border-gray-200 bg-white p-4">
          <h2 className="mb-2 font-semibold text-gray-900">
            Current Queue State
          </h2>

          <pre className="overflow-x-auto text-sm break-words whitespace-pre-wrap text-gray-600">
            {JSON.stringify(state, null, 2)}
          </pre>
        </section>
      </div>
    </div>
  )
}

export default App
