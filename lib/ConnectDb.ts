import mongoose from "mongoose";

const ConnectDb = async () => {
    try {
       const connection =await mongoose.connect(process.env.MONGODB_URL as string);
        console.log("MongoDB connected", connection.connection.host);
        
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};
export default ConnectDb;