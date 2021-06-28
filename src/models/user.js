let mongoose = require('mongoose')
let bcrypt = require('bcrypt')

let userSchema = new mongoose.Schema({
    
    firstName:{type:String, require:true, trim: true, min: 3, max:20},
    
    lastName:{type:String, require:true, trim: true, min: 3, max:20},
    
    userName:{type: String, required:true, trim: true, unique:true, index:true, lowercase: true},
    
    email:{type:String, require:true, trim:true, unique:true, lowercase: true},
    
    hash_password:{type:String, required:true},

    role:{type:String, enum:['user', 'admin'], default: 'user'},
    
    contactNumber:{type:String},
    
    profilePicture:{type:String}

}, {timestamps:true})

userSchema.pre('save', function(next){
    let user = this;

    if(!user.isModified('password')) return next();
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
        if(err) return next(err);
        bcrypt.hash(user.password, salt, function(err, hash){
            if(err) return next(err);
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function 
(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};
/*
userSchema.virtual('password').set(function(password){
    this.hash_password = bcrypt.hashSync(password, 10)
})


userSchema.methods={
    authenticate: function(password){
        return bcrypt.compareSync(password, this.hash_password)
    }
}
*/
module.exports = mongoose.model('User', userSchema);