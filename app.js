const express = require('express')
const connectDB = require('./config/database')
const User = require('./models/user.js')

const app = express()
app.use(express.json())

// get one user by email
app.get('/user',async (req,res) => {
    const userEmail = req.body.email
    const users = await User.findOne({email: userEmail})
    if(users.length === 0){
        res.status(404).send("user not found")
    }else {
        res.send(users)
        console.log("user found")
    }

})


// get all users from db
app.get('/feed', async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch(err) {  
        res.status(400).send('No user found')
    }
})

app.post('/signup', async (req, res) => {
    // creating a new instance of user model
    // console.log(req.body)
    // const user = new User({
    //     firstName: "Rohit",
    //     lastName: "Gautam",
    //     email: "rohit@gmail.com",
    //     password: "rohit@123"
    // })
    const user = new User(req.body)
    try {
        await user.save()
        res.send("User added successfully")
    } catch (err) {
        res.status(400).send(`Error occured while adding user + ${err.message}`)
    }
})





connectDB()
    .then(() => {
        console.log('database connected successfully')
        app.listen(7777, () => {
            console.log("server is now running")
        })
    })
    .catch((err) => {
        console.error('database is not connected')
    })


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

// app.use('/admin', (req,res) => {
//     res.send("admin")
// })

