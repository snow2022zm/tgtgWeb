const express = require("express")
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set("view engine", "ejs")

const ownerAccountSettingsRouter = require("./routes/owners/owners")
const buyerAccountSettingsRouter = require("./routes/buyers/buyers")

app.use("/owners", ownerAccountSettingsRouter)

app.use("/buyers", buyerAccountSettingsRouter)

app.get('/', (req, res) => {
    res.render('index')
})


app.listen(3000)