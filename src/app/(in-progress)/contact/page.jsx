
/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Contact',
  description:
    'contact page',
};

export default function Contact() {
  return (
      <main className='min-h-screen text-white bg-[var(--color-text)] '> 
        <div className='container mx-auto px-4 py-26'>
          <h1 className='text-4xl font-bold mb-4'>Contact Me</h1>
          <p className='text-lg mb-8'>I'm currently working on this page. Stay tuned!</p>
        </div>    
      </main>
  );
}
