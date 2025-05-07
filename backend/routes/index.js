import express from 'express';
import { joinWaitlist } from '../controllers/waitlistController.js';
import { submitApplication, getApplicationStatus } from '../controllers/jobApplicationController.js';
import { submitContactForm } from '../controllers/formController.js';
import { uploadResume } from '../middleware/uploadMiddleware.js';
import { getAllJobs, getJobById, createJob, updateJob, deleteJob } from '../controllers/jobController.js';

const router = express.Router();

// Waitlist routes
router.post('/waitlist', joinWaitlist);

// Job Application routes
router.post('/applications', uploadResume, submitApplication);
router.get('/applications/:id', getApplicationStatus);

// Contact Form route
router.post('/contact', submitContactForm);

// Job Management routes
router.get('/jobs', getAllJobs);
router.get('/jobs/:id', getJobById);
router.post('/jobs', createJob);
router.put('/jobs/:id', updateJob);
router.delete('/jobs/:id', deleteJob);

export default router;