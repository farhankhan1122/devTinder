const express = require('express')

const app = express()

app.use('/contact',
    // (req,res) => {                        route handlers
    // res.send("This is contact page")
    // }
)
app.use('/',(req,res) => {
    res.send("This Home Page")
})


app.listen(7777, () => {
    console.log("server is now running")
})