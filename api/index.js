import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';

dotenv.config();

const mongoURI = process.env.MONGO;

if (!mongoURI) {
    console.error('MongoDB URI is missing in the environment variables.');
    process.exit(1); // Exit the application if MongoDB URI is not defined.
}
mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log('DB is connected');
    })
    .catch((err) => {
        console.error('Error: ', err);
    });

const app = express();
app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

app.use("/api/user", userRouter);

