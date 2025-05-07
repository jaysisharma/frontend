import WaitList from '../models/WaitList.js';
import { dummyWaitlist } from '../data/dummyData.js';

export const joinWaitlist = async (req, res) => {
  try {
    const { email } = req.body;
    
    // Test mode with dummy data
    if (process.env.NODE_ENV === 'development') {
      const existingEmail = dummyWaitlist.find(entry => entry.email === email);
      if (existingEmail) {
        return res.status(400).json({
          success: false,
          message: 'Email already registered for early access'
        });
      }
    }
    
    // Check if email already exists in DB
    const existingEmail = await WaitList.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({
        success: false,
        message: 'Email already registered for early access'
      });
    }

    // Create new waitlist entry
    const waitlist = await WaitList.create({ email });

    res.status(201).json({
      success: true,
      message: 'Successfully joined the waitlist',
      data: {
        email: waitlist.email,
        joinedAt: waitlist.joinedAt,
        id: waitlist._id
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};