const express = require('express')

const app = express()

// app.use('/contact', (_req, res) => {
//     res.send("This is contact page")
// })
// app.use('/',(req,res) => {
//     res.send("This Home Page")
// })


// this will match only the GET method for the /user route
app.get('/user', (req, res) => {
    res.send({firstName: "Farhan", lastName: "Khan"})
})

app.post('/user', (req, res) => {
    res.send("Data is saved successfully in database")
})

app.delete('/user', (req, res) => {
    res.send("User Deleted successfully")
})


// this will match all the HTTP methods (GET, POST, PUT, DELETE, etc.) for the /user route
app.use('/',(req,res) => {
    res.send("This Home Page")
})

app.listen(7777, () => {
    console.log("server is now running")
})