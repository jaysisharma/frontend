import mongoose from 'mongoose';

const waitListSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
  },
  joinedAt: {
    type: Date,
    default: Date.now,
  }
});

export default mongoose.model('WaitList', waitListSchema);