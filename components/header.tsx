"use client";

import { AlignRight, X } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
// import { useAuthStore } from '@/store/auth';
import { useRouter } from 'next/navigation';
import Image from 'next/image';



export const NAV_ITEMS = [
    // { name: "Home", url: "/" },
    { name: "Features", url: "/#features" },
    { name: "Pricing", url: "/#pricing" },
    { name: "About Us", url: "/#about" },
    // { name: "Contact Us", url: "/#contact" },
    
];
  

export default function Header() {

//   const auth = useAuthStore((state) => state.isAuthenticated);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const router = useRouter();
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';

  const handleNavigation = (url: string, isFrom: boolean = false) => {
      if(isFrom){
        router.push(`${url}?from=${pathname}`)
      } else {
        router.push(url);
      }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <header
      className={`py-5 sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isMenuOpen ? "bg-[#ffffff]/80 backdrop-blur-sm" : ""
      }`}
    >
      <div className="my-container mx-auto px-5 xl:px-20 lg:px-10 flex items-center justify-between">
        <div className="shrink-0">
          <button onClick={() => handleNavigation(`/`)} className="text-xl font-bold">
            <div className='w-28 h-12 relative'>
             <Image src="/logo.png" alt="Alyx M1" width={100} height={60} className='w-full h-full object-cover' />
            </div>
            {/* <span className='text-2xl font-semibold'>Alyx M1</span> */}
          </button>
        </div>

        <nav className="hidden md:flex gap-2.5">
        {NAV_ITEMS.map((item, index) => (
            <button
              onClick={() => handleNavigation(item.url)}
              key={index}
              className="py-2.5 px-5 transition-all duration-300 text-nowrap cursor-pointer"
            >
            {item.name}
            </button>
        ))}
        </nav>
        <button
          type="button"
          name='menu-button'
          className="md:hidden p-2 focus:outline-none cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          title={isMenuOpen ? "Close menu" : "Open menu"}
        >
            {!isMenuOpen ? (
              <AlignRight size={30}/>
            ) : (
               <X size={30}/>
            )}
        </button>
        
        <div className='hidden md:block transition-transform duration-500'>
            {/* {!auth ? ( */}
              <button onClick={() => handleNavigation(`/#`, true)} className="hidden md:block min-w-[110px] text-center bg-transparent border-2 border-gray-800 hover:border-gray-700 font-semibold text-gray-800 px-4 py-1 rounded-lg transition-transform duration-200 cursor-pointer">
                  Get Started
              </button>
            {/* ) : (
              <button onClick={() => handleNavigation(`/dashboard`)} className="hidden md:block bg-gray-800 text-white px-4 py-2 rounded-lg transition-transform duration-200 hover:bg-gray-700 cursor-pointer">
                  Dashboard
              </button>
            )} */}
        </div>
        
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white py-4">
          <nav className="flex flex-col items-center gap-2">
            {NAV_ITEMS.map((item, index) => (
              <button
                onClick={() => {
                  handleNavigation(item.url);
                  setIsMenuOpen(false);
                }}
                key={index}
                className="w-4/5 max-w-40 text-center py-2.5 px-5 transition-all duration-300 cursor-pointer"
              >
                {item.name}
              </button>
            ))}
            <div className='md:hidden block transition-transform duration-200'>
                {/* {!auth ? ( */}
                  <button onClick={() => handleNavigation(`/#`, true)} className="md:hidden block bg-transparent border-2 border-gray-800 hover:border-gray-700 font-medium text-gray-800 px-5 py-2 rounded-lg transition-transform duration-200 cursor-pointer">
                      Login
                  </button>
                {/* ) : (
                  <button onClick={() => handleNavigation(`/dashboard`)} className="md:hidden block bg-gray-800 font-medium text-white px-4 py-2 rounded-lg transition-transform duration-200 hover:bg-gray-700 cursor-pointer">
                      Dashboard
                  </button>
                )} */}
            </div>
          </nav>
        </div>
      )}
    </header>
    </>
  )
}