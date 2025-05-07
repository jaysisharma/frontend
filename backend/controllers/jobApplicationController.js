import JobApplication from '../models/JobApplication.js';
import { dummyApplications } from '../data/dummyData.js';
import { uploadToCloudinary } from '../utils/cloudinary.js';
import fs from 'fs/promises';

export const submitApplication = async (req, res) => {
  try {
    console.log('➡️ Received application:', req.body);

    // Handle file upload
    let resumeUrl;
    if (req.file) {
      console.log('📎 Resume file received:', req.file.originalname);
      try {
        resumeUrl = await uploadToCloudinary(req.file);
        console.log('✅ Uploaded resume to Cloudinary:', resumeUrl);
        await fs.unlink(req.file.path).catch(console.error);
      } catch (error) {
        console.error('❌ Resume upload failed:', {
          name: error.name,
          message: error.message,
          stack: error.stack,
          response: error.response?.data || null,
          config: error.config || null
        });
         if (req.file.path) await fs.unlink(req.file.path).catch(() => {});
        return res.status(400).json({ success: false, message: 'Error uploading resume' });
      }
    }

    if (!resumeUrl) {
      console.warn('⚠️ No resume URL found');
      return res.status(400).json({ success: false, message: 'Resume file is required' });
    }

    // Validate fields
    const required = ['fullName', 'email', 'phone', 'university', 'degree', 'skills', 'motivation', 'position'];
    const missing = required.filter(field => !req.body[field]);
    if (missing.length) {
      console.warn('❗ Missing fields:', missing);
      return res.status(400).json({
        success: false,
        message: `Missing fields: ${missing.join(', ')}`
      });
    }

    // Create application
    const application = await JobApplication.create({ ...req.body, resumeUrl });
    console.log('✅ Application created in DB with ID:', application._id);

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully',
      data: {
        id: application._id,
        status: application.status,
        appliedAt: application.appliedAt
      }
    });
  } catch (error) {
    if (req.file?.path) await fs.unlink(req.file.path).catch(() => {});
    console.error('❌ Server error during application submission:', error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getApplicationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    console.log('🔍 Checking status for application ID:', id);
    
    // For testing with dummy data
    if (process.env.NODE_ENV === 'development') {
      const dummyApp = dummyApplications.find(app => app.id === id);
      if (dummyApp) {
        console.log('🧪 Found dummy application:', dummyApp);
        return res.json({
          success: true,
          data: {
            id: dummyApp.id,
            status: dummyApp.status,
            position: dummyApp.position,
            appliedAt: dummyApp.appliedAt
          }
        });
      }
    }

    const application = await JobApplication.findById(id);
    if (!application) {
      console.warn('❌ Application not found in DB for ID:', id);
      return res.status(404).json({
        success: false,
        message: 'Application not found'
      });
    }

    console.log('✅ Application found:', application._id);
    res.json({
      success: true,
      data: {
        id: application._id,
        status: application.status,
        position: application.position,
        appliedAt: application.appliedAt
      }
    });
  } catch (error) {
    console.error('❌ Server error during status check:', error.message);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
