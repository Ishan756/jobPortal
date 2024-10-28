import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('mongodb connected successfully');
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;
/* 
const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log()
    }catch(error) {
    console.log(error)
    }
    }
*/ 