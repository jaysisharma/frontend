import React from 'react';

const teams = [
  {
    name: 'Tech Team',
    description:
      'Build innovative, scalable solutions that power ultra-fast deliveries across Nepal. Join us in solving complex challenges using modern technologies.',
    highlights: [
      'Full-stack Web Development',
      'Mobile App Development',
      'DevOps & Cloud Infrastructure',
    ],
    button: {
      text: 'Explore Tech Roles',
      link: '/careers',
    },
  },
  {
    name: 'Operations Team',
    description:
      'Keep our logistics engine running smoothly from kitchen to customer. Be the heartbeat behind seamless delivery experiences.',
    highlights: [
      'Vendor Management',
      'Fleet & Logistics Optimization',
      'Customer Experience',
    ],
    button: {
      text: 'Coming Soon',
      link: '/careers',
    },
  },
  {
    name: 'Marketing Team',
    description:
      'Craft stories and campaigns that shape our brand and bring millions of users to our platform. Drive growth through creativity.',
    highlights: [
      'Performance Marketing',
      'Brand Strategy',
      'Content & Social Media',
    ],
    button: {
      text: 'See Marketing Openings',
      link: '/careers',
    },
  },
];

function TeamSection() {
  return (
    <section className="py-20 px-6  bg-gradient-to-b from-[#fffdf9] to-[#fef4e8]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-900">
          Teams at Tukatuu
        </h2>
        <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-16">
          We're building the future of hyperlocal commerce in Nepal. Explore how you can be part of our mission.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teams.map((team, index) => (
            <div
              key={index}
              className="bg-white border border-orange-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-8 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{team.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{team.description}</p>
                <ul className="text-sm text-gray-700 space-y-2 mb-6">
                  {team.highlights.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#FC8019] font-bold mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {team.button && (
                <a
                  href={team.button.link}
                  className="mt-auto text-sm text-white font-semibold bg-[#FC8019] hover:bg-[#e26e15] transition-all px-5 py-3 rounded-md text-center block"
                >
                  {team.button.text}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
