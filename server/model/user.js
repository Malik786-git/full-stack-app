import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  age: {
    type: String,
    require: true
  }
});


export default model('User', UserSchema )
