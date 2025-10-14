

export function MenuFooter() {
  const handleSocialClick = (platform) => {
    // Add actual social media URLs here
    const urls = {
      instagram: 'https://instagram.com/abdulrahman-nasser',
      twitter: 'https://twitter.com/abdulrahman-nasser',
      linkedin: 'https://linkedin.com/in/abdulrahman-nasser'
    };
    
    if (urls[platform]) {
      window.open(urls[platform], '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className='mt-10 p-6'>
        <span className='text-sm text-gray-400'>Social</span>
      <div className="flex justify-between mt-2 text-sm gap-3 ">
        <div className="flex gap-4">
          <button 
            onClick={() => handleSocialClick('instagram')} 
            className="transition-colors hover:text-white"
          >
            Instagram
          </button>
          <button 
            onClick={() => handleSocialClick('twitter')} 
            className="transition-colors hover:text-white"
          >
            Twitter  
          </button>
          <button 
            onClick={() => handleSocialClick('linkedin')} 
            className="transition-colors hover:text-white"
          >
            LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
}