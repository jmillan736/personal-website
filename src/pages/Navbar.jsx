import React from 'react'
import ThemeToggleButton from '../components/ThemeToggleButton';

const Navbar = () => {
    const pages = ['Home', 'About', 'Work', 'Contact']

    const handleScroll = (pageName) => {
      const section = document.getElementById(pageName.toLowerCase());
      if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
      }
  };

  return (
    <section className='fixed z-50 top-0 w-full flex justify-center mt-6 text-copy-primary'>
      <div className='bg-card w-max overflow-hidden flex items-center justify-evenly border rounded-2xl gap-6 p-4 shadow-md'>
        {pages.map((pageName) => (
                <button
                        key={pageName}
                        onClick={() => handleScroll(pageName)}
                        className='font-bold bg-transparent border-none cursor-pointer'
                    >
                        {pageName}
                    </button>
            ))}
        <ThemeToggleButton/>
    </div>

    </section>
    
  )
}

export default Navbar