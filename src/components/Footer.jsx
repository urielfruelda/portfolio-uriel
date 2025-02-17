import React from 'react'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <footer className="max-w-[1300px] mx-auto p-6 md:p-20 text-sm md:text-lg mt-12 flex justify-between items-center">
      <Link to="hero" smooth={true} offset={50} duration={500} className="flex items-center space-x-4">
        <img src="/src/assets/1.png" alt="E.Uriel" className="h-10 w-10 rounded-full border-2" />
      </Link>

      <p className="text-gray-400 md:text-center md:text-lg md:order-first text-sm">
        &copy; {new Date().getFullYear()} E.Uriel. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer