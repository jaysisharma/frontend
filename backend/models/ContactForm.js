import mongoose from 'mongoose';

const contactFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('ContactForm', contactFormSchema);