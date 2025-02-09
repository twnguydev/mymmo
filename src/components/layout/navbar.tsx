import React from 'react';
import Link from 'next/link';

export const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      {/* <div className="bg-black p-2 rounded-lg">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0"
        >
          <path d="M13 4v16" />
          <path d="M17 4v16" />
          <path d="M19 4H9.5a4.5 4.5 0 0 0 0 9H13" />
        </svg>
      </div> */}
      <span 
        className="text-2xl font-semibold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
        // style={{ fontFamily: 'Inter, sans-serif' }}
      >
        Owneo<span className="text-gray-600">.fr</span>
      </span>
    </div>
  );
};

export const Navbar = ({ isLoginPage = false }) => {
  return (
    <nav className="flex items-center justify-between py-8 px-4 max-w-6xl mx-auto relative">
      <Link href="/" className="text-2xl text-gray-600">
        <Logo />
      </Link>
      {!isLoginPage && (
        <Link href="/auth"
          className="flex items-center text-sm text-gray-600">
          Se connecter
          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      )}
    </nav>
  );
}