import { useEffect, useState } from "react"
import UserCard from "../components/UserCard"

function Home() {
  const [users, setUsers] = useState([])
  const [input, setInput] = useState("")

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h1>Home Page</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <p>{input}</p>

      <button onClick={() => alert("clicked")}>
        Click
      </button>

      {users.length === 0 ? <p>No users</p> : null}

      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          age={user.age}
        />
      ))}
    </div>
  )
}

export default Home