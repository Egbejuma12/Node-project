const express = require('express')
const dotenv = require("dotenv")
const connectDB = require("./db")
const routes = require("./routes")
dotenv.config()

const app = express()
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(routes)

connectDB()

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`server started on ${PORT}`);
})

app.get("/", (req, res) => {
    res.json({msg: "Backend functioning"})
})
