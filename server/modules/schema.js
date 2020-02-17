
import mongoose from 'mongoose';

const CarSchema = new mongoose.Schema({
   make: {
    type: String,
    required: [true, 'Make is required.']
   },
   model: {
    type: String,
    required: [true, 'Model is required.']
   },
   year: {
    type: String,
    required: [true, 'Year is required.']
   },
   colour: String,
   words: String
  });

CarSchema.index({ "make": 1, "model": 1, "year": 1}, { unique: true });

export const Car = mongoose.model('Car', CarSchema);

