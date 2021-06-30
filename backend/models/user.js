import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    }
}, {timestamps: true, // know where things are created 
})

// before we save the user, lets encrypt
userSchema.pre('save', async function(next){

    if(!this.isModified('password')){ // we can check if its modified or added, this part of mongoose
        next(); // move on
    }

    //else this will run and hash the password
    const salt = await bcrypt.genSalt(10)//hash async
    this.password = await bcrypt.hash(this.password, salt) // get the password of the current user we are seding to the db
})

// add a match password method and use the instance of with user to compare bcrypt passwords
userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password) // this.password is the user we are getting 
}

//Models are responsible for creating and reading documents from the underlying MongoDB database
const User = mongoose.model('User', userSchema)

export default User;