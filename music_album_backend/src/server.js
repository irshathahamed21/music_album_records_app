

const express = require("express")

const connect = require("./configs/db")

const app = express()

app.use = express.json()

app.listen("9669", async()=> {
        await connect()
        console.log("listening on port 9669")
})





