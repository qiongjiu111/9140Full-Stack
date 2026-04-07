const fs = require("fs")

fs.writeFile("test.txt", "Hello Node.js", (err) => {
    if (err) throw err
    console.log("File created")

    fs.readFile("test.txt", "utf8", (err, data) => {
        if (err) throw err
        console.log(data)
    })
})