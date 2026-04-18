const express = require("express")
const router = express.Router()
 
const bookController = require("../controllers/bookController")

router.post("/books", bookController.createUser)

router.get("/books", bookController.getAllUsers)

router.get("/books/:id", bookController.getUserById)

router.put("/books/:id", bookController.updateUser)

router.delete("/books/:id", bookController.deleteUser)

module.exports = router