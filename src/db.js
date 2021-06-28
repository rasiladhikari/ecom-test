import mongoose from 'mongoose';

const DB = async () =>{
    const URL = '';
    try{
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useFindAndModify: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB is connected');
    }catch(error){
        console.log(error.message);
        console.log("Something is Wrong");
    }
};

export default DB;