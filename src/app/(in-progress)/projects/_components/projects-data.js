export const featuredProjects = [
  {
    id: 1,
    title: 'Netflix Clone',
    subtitle: 'Full-Stack Streaming Platform',
    description: 'A modern, responsive Netflix clone built with React and Laravel, leveraging the power of TMDB API to deliver a seamless streaming platform experience. Features user authentication, personalized watchlists, and real-time movie data.',
    image: '/projects/project-netlifx.png',
    liveUrl: 'https://netflix-clone-lemon-nu-42.vercel.app/',
    githubUrl: 'https://github.com/Abdulrahman-Nasser0/netflix-clone',
    techStack: ['React 19', 'Vite', 'TailwindCSS', 'Laravel 12', 'MySQL', 'Zustand', 'Cypress', 'TMDB API', 'Railway'],
    features: [
      'Browse trending movies and TV shows with real-time data from TMDB',
      'Advanced search functionality with category filtering by genre',
      'Secure user authentication system with Laravel Sanctum',
      'Personal watchlist management with persistent storage',
      'Fully responsive design that works seamlessly on all devices',
      'End-to-end testing with Cypress for reliability',
      'State management migrated from Context API to Zustand for better performance',
      'Smooth movie carousels matching Netflix\'s user experience'
    ],
    projectStructure: {
      title: 'Project Architecture',
      structure: [
        { name: 'public/', description: 'Static assets' },
        { name: 'src/', description: '' },
        { name: '│   ├── components/', description: 'Reusable UI components' },
        { name: '│   ├── contexts/', description: '(legacy) old React contexts' },
        { name: '│   ├── stores/', description: 'Zustand stores (authStore, myListStore)' },
        { name: '│   ├── hooks/', description: 'Custom hooks' },
        { name: '│   ├── models/', description: 'Data models' },
        { name: '│   ├── pages/', description: 'Application pages' },
        { name: '│   ├── services/', description: 'API services' },
        { name: '│   ├── utils/', description: 'Helper functions' },
        { name: '│   ├── App.jsx', description: 'Main application component' },
        { name: '│   └── main.jsx', description: 'Application entry point' },
        { name: 'cypress/', description: 'E2E tests' },
        { name: '...config files', description: '' }
      ]
    },
    developmentJourney: {
      title: 'Development Journey & Key Learnings',
      sections: [
        {
          challenge: 'Complex API Integration',
          description: 'The most significant challenge was implementing the favorites system. It required storing TMDB IDs in our database and then re-fetching detailed content information from TMDB when displaying user favorites - an intricate dance between our backend and the external API.',
          learning: 'Gained deep understanding of working with external APIs, handling rate limits, and managing data synchronization between multiple sources.'
        },
        {
          challenge: 'State Management Evolution',
          description: 'Initially built with React Context API, the application faced performance issues with frequent re-renders. Migrated to Zustand for more efficient state management.',
          learning: 'Learned the importance of choosing the right state management solution and how to migrate state management libraries without breaking existing functionality.'
        },
        {
          challenge: 'Authentication & Security',
          description: 'Implementing a secure authentication system that works seamlessly with the Laravel backend required solving several CORS and token management challenges.',
          learning: 'Mastered JWT token handling, secure cookie management, and implementing proper authentication flows in a separated frontend-backend architecture.'
        },
        {
          challenge: 'UI/UX Implementation',
          description: 'Creating smooth, performant movie carousels that matched Netflix\'s behavior while maintaining responsiveness across all devices.',
          learning: 'Developed skills in creating complex UI patterns, optimizing animations for performance, and building truly responsive designs.'
        }
      ]
    },
    development: 'Developed over approximately 15 days as a collaborative full-stack project. Frontend built with React and Vite, backend powered by Laravel REST API with MySQL database deployed on Railway.',
    challenges: 'The most significant challenge was implementing the favorites system, which required storing TMDB IDs in our database and re-fetching detailed content from TMDB when displaying user favorites - an intricate dance between our backend and the external API. Additional challenges included maintaining consistent state with asynchronous API calls, implementing secure authentication flow with CORS and token management, and creating smooth, performant movie carousels that matched Netflix\'s behavior.',
    technicalHighlights: [
      'Complex API integration between Laravel backend and TMDB external API',
      'Migrated from React Context to Zustand for improved state management',
      'Implemented robust authentication with CORS and token handling',
      'Built reusable component library with consistent design patterns',
      'Backend deployed on Railway with MySQL database'
    ],
    collaboration: {
      frontend: 'Abdulrahman Nasser',
      backend: 'Mina Milad',
      backendRepo: 'https://github.com/Mina-Melad-1/netflix-clone'
    },
    gradient: 'from-red-600 to-red-900',
    stats: { duration: '2 months', team: 'Collaborative', type: 'Full-Stack' }
  },
  {
    id: 2,
    title: 'Turistoe',
    subtitle: 'Travel Booking Platform',
    description: 'A modern, responsive travel booking platform that demonstrates modern React development practices. Features a complete booking workflow from destination selection to payment confirmation, with responsive design and comprehensive form validation.',
    image: '/projects/project-turistoe.png',
    liveUrl: 'https://turistoe-woad.vercel.app/',
    githubUrl: 'https://github.com/Abdulrahman-Nasser0/turistoe',
    techStack: ['React 19.1', 'Vite 7.1', 'TailwindCSS 4.1', 'React Router 7.8', 'Lucide React', 'Radix UI'],
    features: [
      'Browse travel destinations with beautiful, high-quality imagery',
      'Complete 4-step booking flow: Trip Details → Personal Info → Payment → Confirmation',
      'Guest counter for accurate adult and children headcount',
      'Multiple package tiers: Standard, Premium, and Luxury options',
      'Flexible room type selection: Single, Double, Suite, and Family rooms',
      'Comprehensive form validation throughout the entire booking process',
      'Interactive customer testimonials carousel with real reviews',
      'Smooth animations and transitions for enhanced user experience',
      'Fully responsive design optimized for mobile, tablet, and desktop'
    ],
    projectStructure: {
      title: 'Project Organization',
      structure: [
        { name: 'components/', description: '' },
        { name: '│   ├── booking/', description: '4-step booking flow' },
        { name: '│   │   ├── TripDetails.jsx', description: '' },
        { name: '│   │   ├── PersonalInfo.jsx', description: '' },
        { name: '│   │   ├── PaymentInfo.jsx', description: '' },
        { name: '│   │   └── BookingConfirmation.jsx', description: '' },
        { name: '│   └── ui/', description: 'Reusable components' },
        { name: '│       ├── Button.jsx', description: '' },
        { name: '│       ├── Header.jsx', description: '' },
        { name: '│       ├── TripCard.jsx', description: '' },
        { name: '│       ├── ClientsCarousel.jsx', description: '' },
        { name: '│       └── ...etc', description: '' },
        { name: 'pages/', description: '' },
        { name: '│   ├── Home.jsx', description: '' },
        { name: '│   └── sections/', description: '' },
        { name: 'validations/', description: '' },
        { name: '    └── bookingValidation.js', description: '' }
      ]
    },
    developmentJourney: {
      title: 'Development Journey & Key Learnings',
      sections: [
        {
          challenge: 'Figma-to-Code Transformation',
          description: 'Successfully translated a complex Figma design into a fully functional React application while maintaining pixel-perfect accuracy across all breakpoints.',
          learning: 'Mastered the art of interpreting design files, understanding design systems, and implementing them with precision using modern CSS frameworks.'
        },
        {
          challenge: 'Multi-Step Form Management',
          description: 'Implemented a sophisticated 4-step booking flow with proper state management, validation, and the ability to navigate back and forth without losing data.',
          learning: 'Gained expertise in complex form handling, state persistence across components, and creating smooth user flows with proper validation at each step.'
        },
        {
          challenge: 'Responsive Design Excellence',
          description: 'Created responsive layouts that work seamlessly across mobile, tablet, and desktop while preserving the design\'s visual appeal and functionality.',
          learning: 'Developed deep understanding of responsive design principles, TailwindCSS breakpoints, and mobile-first development approach.'
        },
        {
          challenge: 'Component Reusability',
          description: 'Built a library of reusable components using Radix UI primitives for accessibility and consistency across the application.',
          learning: 'Learned to create scalable, maintainable component architectures and the importance of accessibility in modern web applications.'
        }
      ]
    },
    development: 'Built as a Figma-to-Code challenge, implementing a beautiful travel agency design with pixel-perfect accuracy. The project showcases modern React patterns, responsive adaptation across all devices, and enhanced functionality beyond the original design.',
    challenges: 'Successfully translated a complex Figma design into a fully functional React application while maintaining pixel-perfect accuracy. Implemented a sophisticated multi-step booking flow with proper state management and validation. Created responsive layouts that work seamlessly across all device sizes while preserving the design\'s visual appeal.',
    technicalHighlights: [
      'Pixel-perfect implementation of Figma design system',
      'Multi-step form with persistent state management',
      'Custom validation logic for booking information',
      'Responsive grid layouts with TailwindCSS',
      'Accessible components using Radix UI primitives',
      'Smooth page transitions with React Router'
    ],
    designCredit: 'Original Figma design from the Figma Community - Landing Page Travel Agency',
    gradient: 'from-cyan-600 to-blue-900',
    stats: { duration: '1 month', team: 'Solo', type: 'Frontend' }
  }
];

export const additionalProjects = [
  {
    id: 'space-tourism',
    title: 'Space Tourism Website',
    description: 'A multi-page space tourism website with interactive destinations, crew, and technology sections. Features smooth page transitions and responsive design.',
    image: '/projects/project-space-tourism.png',
    gradient: 'from-sky-500 via-blue-500 to-cyan-500',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    features: [
      'Multi-page website with navigation',
      'Interactive tabs for destinations and crew',
      'Smooth animations and transitions',
      'Fully responsive across all devices'
    ],
    development: 'Focused on creating an immersive space-themed experience with careful attention to typography, spacing, and interactive elements.',
    liveUrl: 'https://space-website-challenge.netlify.app/',
    githubUrl: 'https://github.com/Abdulrahman-Nasser0/space-tourism-website',
    stats: { type: 'Frontend', team: 'Solo' }
  },
  {
    id: 'natours',
    title: 'Natours Landing Page',
    description: 'A beautiful and modern landing page for a fictional nature tour company. Showcases advanced CSS animations and effects.',
    image: '/projects/project-natours-landing.png',
    gradient: 'from-green-500 via-lime-500 to-emerald-500',
    techStack: ['HTML5', 'SCSS', 'CSS Grid', 'Animations'],
    features: [
      'Custom CSS animations',
      'Advanced SCSS architecture',
      'Responsive grid layouts',
      'Modern UI design patterns'
    ],
    development: 'Created as a showcase of advanced CSS techniques including animations, transforms, and modern layout methods.',
    liveUrl: 'https://natours-landing-webpage.netlify.app/',
    githubUrl: 'https://github.com/Abdulrahman-Nasser0/natours-landing',
    stats: { type: 'Frontend', team: 'Solo' }
  },
  {
    id: 'personal-hub',
    title: 'Personal Productivity Hub',
    description: 'A full-stack web application designed to enhance personal productivity through powerful features like task management, note-taking, habit tracking, and calendar integration. Built collaboratively by a team of six developers, showcasing secure authentication, responsive UI, and scalable deployment with Docker.',
    image: '/projects/project-personal-productivity-hub.png',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    techStack: ['Flask', 'Python', 'HTML', 'CSS', 'JavaScript', 'SQLite', 'PostgreSQL', 'Docker', 'Session Auth'],
    features: [
      'Secure user authentication with registration and login system',
      'Personalized task management with full CRUD operations',
      'Note-taking module linked to individual user accounts',
      'Habit tracking system to monitor daily routines and goals',
      'Visual calendar integration for scheduling and time management',
      'Dockerized deployment for consistent development and production environments',
      'Modern, responsive UI with smooth user experience',
      'Session-based authentication for secure user handling'
    ],
    development: 'Developed as a collaborative college project over 10 weeks (March 3 – May 14, 2025) by a team of six developers, with an estimated effort of 80–110 hours. The project demonstrates full-stack development skills, team collaboration, and modern DevOps practices.',
    collaboration: {
      frontend: 'Team of 6 Developers',
      backend: 'Team of 6 Developers',
      teamMembers: [
        'Abdulrahman Nasser',
        'Abdo Wael',
        'Mustafa Salah Fadloul',
        'Hassan HKH',
        'Zeus62',
        'Mina Milad'
      ]
    },
    technicalHighlights: [
      'Full-stack architecture with Flask backend and responsive frontend',
      'Database integration with SQLite for development and PostgreSQL for production',
      'Docker containerization with docker-compose for easy deployment',
      'Session-based authentication system with secure user management',
      'RESTful API design for task, note, and habit management',
      'Responsive CSS design for seamless experience across devices',
      'Bug fixes including login/signup redirects and constraint validation'
    ],
    githubUrl: 'https://github.com/Abdulrahman-Nasser0/Personal-Productivity-Hub',
    stats: { duration: '10 weeks', team: 'Team of 6', type: 'Full-Stack' }
  }
];
