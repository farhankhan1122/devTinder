// const express = require('express')
// const {adminAuth,userAuth} = require('./middlewares/auth.js')

// const app = express()



// // app.get('/admin', (req,res) => {
// //     res.send("admin")
// // })

// app.use('/admin',adminAuth)
// // app.use('/user',userAuth)

// app.get('/user/login',(req,res) => {
//     res.send('Login successfully')
// })

// app.get('/user',userAuth,(req,res) => {
//     res.send('User Data Sent')
// })
// app.get('/admin/getAllData', (req,res,next) => {
//     res.send('All data sent')
// })

// app.get('/admin/deleteUser', (req,res) => {
//     res.send('User deleted')
// })



// app.listen(7777, () => {
//     console.log("server is now running")
// })