const url = require("url")

const myUrl = new URL("http://localhost:3000/test?name=Tom&age=20")

console.log(myUrl.href)
console.log(myUrl.hostname)
console.log(myUrl.pathname)
console.log(myUrl.search)
console.log(myUrl.searchParams.get("name"))