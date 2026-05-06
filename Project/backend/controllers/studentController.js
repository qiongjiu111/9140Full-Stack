import Student from "../models/studentModel.js"

const getStudents = async (req, res) => {
  const students = await Student.find()

  res.status(200).json(students)
}

const addStudent = async (req, res) => {
  const { name, age, studentId } = req.body

  if (!name || !age || !studentId) {
    res.status(400)
    throw new Error("Please fill all fields")
  }

  const student = await Student.create({
    name,
    age,
    studentId
  })

  res.status(200).json(student)
}

const deleteStudent = async (req, res) => {
  const student = await Student.findById(req.params.id)

  if (!student) {
    res.status(404)
    throw new Error("Student not found")
  }

  await student.deleteOne()

  res.status(200).json({ id: req.params.id })
}

export { getStudents, addStudent, deleteStudent }