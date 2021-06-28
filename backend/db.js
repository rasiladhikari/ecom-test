import mongoose from 'mongoose'

const MongoDB = async () => {
let connectionString = 'mongodb+srv://admin:admin@cluster0.iso03.mongodb.net/ecommerce?retryWrites=true&w=majority'
mongoose.connect(
    connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology:true,
        useCreateIndex: true
    }).then(()=> {
    console.log('Database Connected')
})
}

export default MongoDB;