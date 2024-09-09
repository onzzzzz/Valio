import mongoose from "mongoose";

let isConnected = false;

const connectToMango = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected) {
        console.log('MongoDB is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "valio_customer_data",
        })
        isConnected = true;
        console.log('MongoDB conneced');
    } catch (error) {
        console.log(error);
    }
};

export default connectToMango;