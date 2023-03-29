import express from 'express';
import mongoose from 'mongoose';
import User from './routes/user.js'
import cors from 'cors';


const port = process.env.PORT || 5000;
const app = express();



app.use(cors());
app.use(express.json());


// connected to db..
const mongoDB = ()=>{
    mongoose.connect(`mongodb+srv://malik_jahangir786:aliwaris786mongodb@cluster0.a3rzal2.mongodb.net/?retryWrites=true&w=majority`)
    .then(res => console.log('Connected to DB..'))
    .catch(err => console.log(err.message, 'Unable to connect with db'));
}

// user..
app.use('/user', User);


app.listen(port, ()=>{
    mongoDB();
    console.log(`Backend running on PORT ${port}`);
})


app.use('/', User);



