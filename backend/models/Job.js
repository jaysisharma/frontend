import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    companyIntro: {
      type: String,
      required: true,
      default: "Tukatuu is a cutting-edge, next-generation food and essentials delivery app soon launching in Kathmandu, Bhaktapur, and Lalitpur. Our enthusiastic team is passionate about transforming how food and daily essentials are delivered in Nepal—delivering efficiency, quality, and unmatched speed. With our roots in Nepal, Tukatuu aims to expand globally, redefining delivery standards and enhancing customer experiences worldwide."
    },
    location: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ['Internship', 'Part-time', 'Full-time'],
    },
    duration: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      default: 'Unpaid',
    },
    internsNeeded: {
      type: Number,
      required: true,
    },
    responsibilities: {
      type: [String],
      required: true,
    },
    requirements: {
      type: [String],
      required: true,
    },
    skills: {
      type: [String],
      required: true,
    },
    bonus: {
      type: [String],
    },
    whatWeOffer: {
      type: [String],
      required: true,
    },
    whatWeDontOffer: {
      type: [String],
    },
    applicationProcess: {
      instructions: {
        type: String,
        required: true,
      },
      requirements: {
        type: [String],
        required: true,
      },
      afterReview: {
        type: [String],
        required: true,
      },
    },
    workplace: {
      type: String,
      required: true,
      default: "Remote work with online meetings depending on team needs."
    },
    durationDetails: {
      type: String,
      required: true,
      default: "Minimum commitment of 3 months, with the possibility of extension based on mutual agreement and performance."
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Job || mongoose.model('Job', jobSchema);
