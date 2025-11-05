export const featuredProjects = [
  {
    id: 1,
    title: 'Netflix Clone',
    subtitle: 'Full-Stack Streaming Platform',
    description: 'A modern, responsive Netflix clone built with React and Laravel, featuring user authentication, personalized watchlists, and real-time movie data from TMDB API',
    image: '/projects/project-netlifx.png',
    liveUrl: 'https://netflix-clone-abdulrahman-nasser.vercel.app/',
    githubUrl: 'https://github.com/Abdulrahman-Nasser0/netflix-clone',
    techStack: ['React', 'Vite', 'TailwindCSS', 'Laravel', 'MySQL', 'Zustand', 'Cypress', 'TMDB API'],
    features: [
      'Browse trending movies and TV shows',
      'Search functionality and category filtering',
      'User authentication system',
      'Personal watchlist management',
      'Fully responsive design',
      'E2E testing with Cypress'
    ],
    development: '~15 days collaborative project',
    challenges: 'Complex API integration between backend and TMDB, state management with Zustand migration from Context API, authentication flow with CORS/token management',
    gradient: 'from-red-600 to-red-900',
    stats: { duration: '15 days', team: 'Collaborative', type: 'Full-Stack' }
  },
  {
    id: 2,
    title: 'Turistoe',
    subtitle: 'Travel Booking Platform',
    description: 'A modern, responsive travel booking platform with multi-step booking flow, destination browsing, and client testimonials',
    image: '/projects/project-turistoe.png',
    liveUrl: 'https://turistoe.vercel.app/',
    githubUrl: 'https://github.com/Abdulrahman-Nasser0/turistoe',
    techStack: ['React 19', 'Vite', 'TailwindCSS 4', 'React Router', 'Lucide React', 'Radix UI'],
    features: [
      'Browse destinations with beautiful imagery',
      '4-step booking process',
      'Guest counter for adults/children',
      'Package selection (Standard, Premium, Luxury)',
      'Room type selection',
      'Form validation throughout',
      'Customer testimonials carousel'
    ],
    development: 'Figma-to-Code challenge - pixel-perfect implementation',
    gradient: 'from-cyan-600 to-blue-900',
    stats: { duration: '1 week', team: 'Solo', type: 'Frontend' }
  }
];

export const additionalProjects = [
  {
    id: 'space-tourism',
    title: 'Space Tourism Website',
    description: 'A multi-page space tourism website with interactive destinations, crew, and technology sections. Features smooth page transitions and responsive design.',
    image: '/projects/project-space-tourism.png',
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    features: [
      'Multi-page website with navigation',
      'Interactive tabs for destinations and crew',
      'Smooth animations and transitions',
      'Fully responsive across all devices'
    ],
    development: 'Focused on creating an immersive space-themed experience with careful attention to typography, spacing, and interactive elements.',
    liveUrl: 'https://abdulrahman-space-tourism-website.netlify.app/',
    githubUrl: 'https://github.com/Abdulrahman-02/space-tourism-website',
    stats: { type: 'Frontend', team: 'Solo' }
  },
  {
    id: 'personal-hub',
    title: 'Personal Productivity Hub',
    description: 'An all-in-one productivity dashboard combining notes, tasks, and pomodoro timer. Built to streamline personal workflow management.',
    image: '/projects/project-personal-productivity-hub.png',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'React Router'],
    features: [
      'Note-taking with rich text editing',
      'Task management with priorities',
      'Pomodoro timer for focus sessions',
      'Dark/light theme support'
    ],
    development: 'Developed to solve personal productivity needs, combining multiple tools into one cohesive application.',
    liveUrl: 'https://abdulrahman-personal-productivity-hub.netlify.app/',
    githubUrl: 'https://github.com/Abdulrahman-02/personal-productivity-hub',
    stats: { type: 'Full-Stack', team: 'Solo' }
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
    liveUrl: 'https://natours-css-abdulrahman.netlify.app/',
    githubUrl: 'https://github.com/Abdulrahman-02/Natours',
    stats: { type: 'Frontend', team: 'Solo' }
  }
];
