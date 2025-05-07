import mongoose from 'mongoose';

const jobApplicationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  university: {
    type: String,
    required: [true, 'University name is required'],
    trim: true
  },
  degree: {
    type: String,
    required: [true, 'Degree information is required'],
    trim: true
  },
  skills: {
    type: String,
    required: [true, 'Skills are required']
  },
  motivation: {
    type: String,
    required: [true, 'Motivation letter is required']
  },
  resumeUrl: {
    type: String,
    required: [true, 'Resume URL is required']
  },
  position: {
    type: String,
    required: [true, 'Position applied for is required']
  },
  status: {
    type: String,
    enum: ['pending', 'reviewing', 'accepted', 'rejected'],
    default: 'pending'
  },
  appliedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('JobApplication', jobApplicationSchema);