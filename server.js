const express = require("express")
const session = require('express-session')
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set("view engine", "ejs")

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: "tgtg"
}))

const ownerAccountSettingsRouter = require("./routes/owners/owners")
const ownerBagsRouter = require("./routes/owners/ownerBags")
const ownerOrdersRouter = require("./routes/owners/ownerOrders")

const buyerAccountSettingsRouter = require("./routes/buyers/buyers")
const buyerBagsRouter = require("./routes/buyers/buyerBags")
const buyerOrdersRouter = require("./routes/buyers/buyerOrders")
const paymentRouter = require("./routes/buyers/payment")

app.use("/owners", ownerAccountSettingsRouter)
app.use("/ownerBags", ownerBagsRouter)
app.use("/ownerOrders", ownerOrdersRouter)

app.use("/buyers", buyerAccountSettingsRouter)
app.use("/buyerBags", buyerBagsRouter)
app.use("/buyerOrders", buyerOrdersRouter)
app.use("/payment", paymentRouter)

app.listen(3000)