import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Job from '../models/Job.js';

dotenv.config();

const jobs = [
  {
    title: "UI/UX Intern",
    description: "As a UI/UX Intern at Tukatuu, you'll work closely with the design and product teams to create seamless and user-friendly experiences for our food and essentials delivery app. Your role will involve assisting in wireframing, prototyping, and user journey mapping for both mobile and web interfaces. You'll conduct user research and usability testing to ensure that our app meets the needs of our diverse customer base. You'll also collaborate with developers to implement design solutions, stay up-to-date with the latest UI/UX trends, and contribute to creating an intuitive, aesthetically pleasing user experience.",
    location: "Remote",
    type: "Internship",
    duration: "3 months",
    department: "Design",
    salary: "Unpaid",
    responsibilities: [
      "Assist in creating wireframes, prototypes, and user journey flows for Tukatuu’s app and web interfaces.",
      "Conduct user research, usability testing, and gather feedback to optimize design decisions.",
      "Collaborate with product managers, developers, and marketing teams to align design goals with business objectives.",
      "Support the development of consistent visual guidelines, style guides, and UI components.",
      "Participate in brainstorming and design review sessions.",
      "Stay updated with current UI/UX trends, best practices, and emerging technologies.",
      "Iterate rapidly based on user feedback and design evaluation."
    ],
    requirements: [
      "Minimum qualification: High School graduate (+2 level) or Undergraduate students.",
      "Basic understanding of UI/UX principles, usability, and accessibility.",
      "Familiarity with design tools such as Figma, Adobe XD, Sketch, or similar platforms.",
      "Strong visual design sense and attention to detail.",
      "Good communication skills in Nepali and English (written and verbal).",
      "Ability to accept feedback and apply it constructively to designs.",
      "Self-driven, proactive, and passionate about creating user-centered designs.",
      "Bonus: Familiarity with prototyping tools, motion design, or front-end basics (HTML/CSS)."
    ],
    skills: [
      "UI/UX",
      "Figma",
      "Adobe XD",
      "Wireframing",
      "Prototyping",
      "User Research",
      "Visual Design"
    ],
    internsNeeded: 1,
    whatWeOffer: [
      "Hands-on experience in UI/UX design with a rapidly growing startup.",
      "Opportunity to work on real, user-facing products.",
      "Flexible working hours tailored to accommodate academic or personal schedules.",
      "Flexible workplace arrangement: Remote work.",
      "Collaborative and supportive team environment across diverse international offices.",
      "A letter of recommendation from Tukatuu upon successful completion of the internship.",
      "Possibility to feature your work (with credits) in the Tukatuu portfolio and app launch materials.",
      "Potential employment opportunities in future ventures under the Tukatuu Group, subject to performance and alignment."
    ],
    whatWeDontOffer: [
      "Monetary Compensation: This internship is unpaid but provides valuable professional experience, portfolio growth, and industry exposure.",
      "Automatic Full-time Employment: Exceptional interns may be considered for future roles but employment is not guaranteed post-internship.",
      "Structured Formal Training: Mentorship and design feedback will be provided, but self-driven learning is strongly encouraged."
    ],
    applicationProcess: {
      instructions: "Interested applicants should submit the following documents:",
      requirements: [
        "Updated CV/Resume.",
        "Portfolio or GitHub profile (optional but highly encouraged; can include personal or academic projects).",
        "Cover Letter detailing motivation, relevant skills, and objectives for this internship."
      ],
      afterReview: [
        "Shortlisted candidates will be invited for a brief 10–15-minute interview.",
        "Selected candidates will commence the internship promptly upon confirmation."
      ]
    },
    isActive: true
  },
  {
    title: "Flutter Developer Intern",
    description: "As a Flutter Developer Intern at Tukatuu, you'll have the opportunity to contribute directly to the development of our cutting-edge food delivery app. You'll assist in building new features, integrating APIs, and maintaining our Flutter mobile application. Your role will include working alongside UI/UX designers to ensure the app delivers an exceptional user experience, debugging and optimizing code, and ensuring the app runs smoothly across devices. This internship will help you sharpen your mobile app development skills, specifically in Flutter and Dart, and give you hands-on experience with real-world applications in the tech startup environment.",
    location: "Remote",
    type: "Internship",
    duration: "3 months",
    department: "Tech",
    salary: "Unpaid",
    responsibilities: [
      "Assist in the development of new features and maintenance of the Tukatuu Flutter mobile application.",
      "Collaborate with UI/UX designers to implement clean, modern, and intuitive user interfaces.",
      "Integrate REST APIs and work closely with backend developers.",
      "Participate in testing, debugging, and optimizing mobile application performance.",
      "Write clean, scalable, and well-documented code.",
      "Stay updated with the latest Flutter developments, trends, and best practices.",
      "Participate actively in team discussions, code reviews, and sprint meetings."
    ],
    requirements: [
      "Minimum qualification: Undergraduate Students or Graduated Students.",
      "Basic understanding of Flutter framework and Dart language.",
      "Familiarity with state management techniques like Provider, Bloc, Riverpod, etc.",
      "Understanding of RESTful APIs and mobile app architecture.",
      "Good communication skills in Nepali and English (written and verbal).",
      "Strong problem-solving abilities and attention to detail.",
      "Ability to work independently and as part of a team.",
      "Bonus: Familiarity with Firebase, Git/GitHub, and experience publishing personal projects or apps."
    ],
    internsNeeded: 1,
    skills: [
      "Flutter",
      "Dart",
      "REST APIs",
      "State Management",
      "Firebase",
      "Git/GitHub"
    ],
    whatWeOffer: [
      "Hands-on experience developing a live mobile application in a real-world startup environment.",
      "Opportunity to work on meaningful features impacting thousands of users.",
      "Flexible working hours tailored to accommodate academic or personal schedules.",
      "Flexible workplace arrangement: Remote work.",
      "Collaborative and supportive team environment across diverse international offices.",
      "A letter of recommendation from Tukatuu upon successful completion of the internship.",
      "Possibility to feature your contributions (with credits) in the Tukatuu app launch materials.",
      "Potential employment opportunities in future ventures under the Tukatuu Group, subject to performance and alignment."
    ],
    whatWeDontOffer: [
      "Monetary Compensation: This internship is unpaid but provides valuable professional experience, project exposure, and networking opportunities.",
      "Automatic Full-time Employment: Exceptional interns may be considered for future roles but employment is not guaranteed post-internship.",
      "Structured Formal Training: Mentorship and code reviews will be provided, but self-learning and proactive development are expected."
    ],
    applicationProcess: {
      instructions: "Interested applicants should submit the following documents:",
      requirements: [
        "Updated CV/Resume.",
        "Portfolio or GitHub profile (optional but highly encouraged; can include personal or academic projects).",
        "Cover Letter detailing motivation, relevant skills, and objectives for this internship."
      ],
      afterReview: [
        "Shortlisted candidates will be invited for a brief 10–15-minute interview.",
        "Selected candidates will commence the internship promptly upon confirmation."
      ]
    },
    isActive: true
  }
];

const seedJobs = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing jobs
    await Job.deleteMany({});
    console.log('Cleared existing jobs');

    // Insert new jobs
    await Job.insertMany(jobs);
    console.log('Successfully seeded jobs');

    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding jobs:', error);
    process.exit(1);
  }
};

seedJobs();
