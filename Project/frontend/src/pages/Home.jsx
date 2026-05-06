import { useEffect, useState } from "react"

function Home() {
  const [students, setStudents] = useState([])

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [studentId, setStudentId] = useState("")

  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:5000/api/students")
      .then((res) => res.json())
      .then((data) => setStudents(data))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch("http://localhost:5000/api/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        age,
        studentId
      })
    })

    const data = await response.json()

    setStudents([...students, data])

    setName("")
    setAge("")
    setStudentId("")
  }

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/students/${id}`, {
      method: "DELETE"
    })

    setStudents(students.filter((student) => student._id !== id))
  }

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="App">
      <h1>Student Manager</h1>

      <input
        type="text"
        placeholder="Search Student Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <input
          type="text"
          placeholder="Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />

        <button type="submit">
          Add Student
        </button>
      </form>

      {filteredStudents.map((student) => (
        <div
          key={student._id}
          className="student-card"
        >
          <h3>{student.name}</h3>

          <p>Age: {student.age}</p>

          <p>ID: {student.studentId}</p>

          <button onClick={() => handleDelete(student._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default Home