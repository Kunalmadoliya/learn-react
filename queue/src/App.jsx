
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
      
  }

  const updateQueue = (customer , id ) => {
    
  }

  return (
    <>
      <header>
        <h1>Queue Managemen is good App</h1>
        <p>
          Manage your queue efficiently with our app.
          Add, delete, and update customer information seamlessly.
        </p>
      </header>

      <main>
        <AddQueue onAdd={addQueueFn} />
        <DisplayQueue queue={state} />
        <p>Current Queue State: {JSON.stringify(state)}</p>
      </main>
    </>
  )
}

export default App
