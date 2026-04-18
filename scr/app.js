const express = require("express")
const app = express()

const bookRoutes = require("./routes/bookRoutes")

app.get("/", (request, response) => {
    response.send("Funcionou!")
})

app.use(express.json())

app.use("/", bookRoutes)

module.exports = app