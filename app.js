const express = require('express')

const app = express()

// app.use('/contact', (_req, res) => {
//     res.send("This is contact page")
// })
// app.use('/',(req,res) => {
//     res.send("This Home Page")
// })


// this will match only the GET method for the /user route
// app.get("/user/:username/:email/:id", (req, res) => {
//     console.log(req.params)
//     // console.log(req.query)
//     res.send({firstName: "Farhan", lastName: "Khan"})
// })

// app.post('/user', (req, res) => {
//     // console.log(req.query)
//     console.log(req.params)
//     res.send("Data is saved successfully in database")
// })

// app.delete('/user', (req, res) => {
//     res.send("User Deleted successfully")
// })




// this will match all the HTTP methods (GET, POST, PUT, DELETE, etc.) for the /user route
// app.use('/',(req,res) => {
//     res.send("This Home Page")
// })


// multiple route handelers 
// next
// next functions and error along with res.send
// app.use("/route, rH ,[rH2,rH3],rH5 , rH6")

// app.use(
//     "/user",
//     [(req, res, next) => {
//         next()
//         // res.send("Response1")
//     }],
//     (req, res,next) => {
//         res.send("Response2")
//     }
// )

app.use('/admin', (req,res) => {
    res.send("admin")
})



app.listen(7777, () => {
    console.log("server is now running")
})