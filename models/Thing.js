import mongoose from 'mongoose';

let ThingSchema  = new mongoose.Schema({
  name: String,
  counter: Number
});

export default mongoose.model('Thing', ThingSchema);
