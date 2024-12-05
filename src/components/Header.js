"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-custom-header p-4">
      <nav
        className="flex items-center justify-between mx-auto max-w-full px-0"
        aria-label="Global"
      >
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/">
            <img
              className="h-10 w-auto"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company Logo"
            />
          </Link>
        </div>

        {/* Title Section */}
        <div className="hidden sm:flex flex-grow justify-center">
          <h1 className="text-white text-5xl font-light">Image Gallery</h1>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div
            ref={menuRef}
            className="fixed inset-y-0 right-0 w-64 bg-[var(--background)] shadow-lg p-6 text-[var(--foreground)]"
          >
            <div className="flex items-center justify-between mb-4">
              <Link href="/">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Your Company Logo"
                />
              </Link>
              <button
                type="button"
                className="rounded-md p-2 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="px-4 py-2 rounded text-[var(--foreground)] bg-[var(--background)] border-2 border-transparent hover:border-white transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about-me"
                className="px-4 py-2 rounded text-[var(--foreground)] bg-[var(--background)] border-2 border-transparent hover:border-white transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Me
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 rounded text-[var(--foreground)] bg-[var(--background)] border-2 border-transparent hover:border-white transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
