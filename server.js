const express = require("express")
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set("view engine", "ejs")

const ownerAccountSettingsRouter = require("./routes/owners/owners")
const ownerBagsRouter = require("./routes/owners/ownerBags")
const ownerOrdersRouter = require("./routes/owners/ownerOrders")
const buyerAccountSettingsRouter = require("./routes/buyers/buyers")

app.use("/owners", ownerAccountSettingsRouter)
app.use("/ownerBags", ownerBagsRouter)
app.use("/ownerOrders", ownerOrdersRouter)

app.use("/buyers", buyerAccountSettingsRouter)

app.listen(3000)