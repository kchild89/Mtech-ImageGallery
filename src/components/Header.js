"use client";
import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Global"
      >
        {/* Logo Section */}
        <div className="flex items-center justify-start lg:flex-1">
          <a href="#" className="p-1.5">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company Logo"
            />
          </a>
        </div>

        {/* Title Section */}
        <div className="flex-1 flex justify-center items-center">
          <h1 className="text-black text-4xl font-bold">Images That Inspire</h1>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10 bg-black opacity-50" />
          <div className="fixed inset-y-0 right-0 z-10 w-full max-w-sm bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="p-1.5">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Your Company Logo"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
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
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 space-y-2">
              <a href="#" className="block font-semibold text-gray-900">
                Home
              </a>
              <a href="#" className="block font-semibold text-gray-900">
                Categories
              </a>
              <a href="#" className="block font-semibold text-gray-900">
                About Me
              </a>
              <a href="#" className="block font-semibold text-gray-900">
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
