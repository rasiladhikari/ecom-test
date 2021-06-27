//import necessary libraries
let express = require("express")
let env = require('dotenv')
let bodyParser = require('body-parser')
let mongoose = require("mongoose")

//import routes
let userRoutes = require('./routes/user')

//environment variable
env.config();

//mongodb conenction
let connectionString = `mongodb+srv://admin:admin@cluster0.iso03.mongodb.net/ecommerce?retryWrites=true&w=majority`
mongoose.connect(
    connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology:true,
        useCreateIndex: true
    }).then(()=> {
    console.log('Database Connected')
})

// let connectionString = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.iso03.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`
// mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology:true}).then(()=> {
//     console.log('Database Connected')
// })

let app = express()
app.use(express.urlencoded({extended:false}))




app.use(bodyParser())
app.use('/api', userRoutes)




app.listen(process.env.PORT, ()=> console.log(`Server running on port ${process.env.PORT}`))