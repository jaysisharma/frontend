import ContactForm from '../models/ContactForm.js';
import { dummyContacts } from '../data/dummyData.js';

export const submitContactForm = async (req, res) => {
  try {
    // For testing with dummy data
    if (process.env.NODE_ENV === 'development') {
      const dummyId = `CON${(dummyContacts.length + 1).toString().padStart(3, '0')}`;
      return res.status(201).json({
        success: true,
        message: 'Message sent successfully',
        data: {
          id: dummyId,
          submittedAt: new Date().toISOString()
        }
      });
    }

    const formSubmission = await ContactForm.create(req.body);
    
    res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      data: {
        id: formSubmission._id,
        submittedAt: formSubmission.submittedAt
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};