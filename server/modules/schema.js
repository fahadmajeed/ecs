
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
   colour: String,
   year: String
  });

CarSchema.index({ "make": 1, "model": 1}, { unique: true });

export const Car = mongoose.model('Car', CarSchema);

