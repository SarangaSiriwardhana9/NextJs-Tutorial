import mongoose from 'mongoose';

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://root:1234@cluster0.zpxsw9a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error);
    }
};

export default connect;
