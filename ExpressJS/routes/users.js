const express = require("express")
const router = express.Router()

let users = require("../data/users")

router.get("/", (req, res) => {
    res.json(users)
})

router.get("/:id", (req, res) => {
    const user = users.find(u => u.id == req.params.id)
    res.json(user)
})

router.post("/", (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: "ABC",
        age: 22
    }
    users.push(newUser)
    res.json(newUser)
})

router.put("/:id", (req, res) => {
    const user = users.find(u => u.id == req.params.id)
    user.name = "ABC"
    user.age = 22
    res.json(user)
})

router.delete("/:id", (req, res) => {
    users = users.filter(u => u.id != req.params.id)
    res.json({ message: "deleted" })
})

module.exports = router