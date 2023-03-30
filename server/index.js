import express from 'express';
import mongoose from 'mongoose';
import User from './routes/user.js'
import cors from 'cors';
import dotenv from 'dotenv'

const port = process.env.PORT || 5000;
const app = express();


app.use(cors());
app.use(express.json());
dotenv.config();


// connected to db..
const mongoDB = ()=>{
    mongoose.connect(`${process.env.MONGO_URI}`)
    .then(res => console.log('Connected to DB..'))
    .catch(err => console.log(err.message, 'Unable to connect with db'));
}


// user...
app.use('/user', User);


app.listen(port, ()=>{
    mongoDB();
    console.log(`Backend running on PORT ${port}`);
})