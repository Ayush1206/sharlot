"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

// Desktop Navigation
function DesktopNav({ isScrolled }: { isScrolled: boolean }) {
  return (
    <div
      className={`w-full fixed top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black shadow-md" : "bg-transparent"
      }`}
      style={{ height: "80px" }} // Fixed height for Desktop
    >
      <div className="w-full mx-auto h-full flex items-center justify-center">
        <nav className="w-4/5 h-full flex items-center justify-center">
          {/* Centered Navigation */}
          <ul className="flex gap-8 items-center">
            <li>
              <Link
                href="#about"
                className="text-lg font-medium hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#samples"
                className="text-lg font-medium hover:underline"
              >
                Samples
              </Link>
            </li>
            <li>
              <Link href="/" className="text-3xl font-bold">
                DJ-Sharlot
              </Link>
            </li>
            <li>
              <Link
                href="#events"
                className="text-lg font-medium hover:underline"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-lg font-medium hover:underline"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

// Mobile Navigation
function MobileNav({ isScrolled }: { isScrolled: boolean }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => setIsExpanded(!isExpanded);

  return (
    <div
      className={`w-full fixed top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black shadow-md" : "bg-transparent"
      }`}
      style={{ height: "60px" }} // Fixed height for Mobile
    >
      <div className="w-full mx-5 h-full">
        <nav className="w-4/5 mx-auto h-full flex items-center justify-between">
          {/* DJ-Sharlot */}
          <div className="text-3xl font-bold">DJ-Sharlot</div>
          {/* Burger Icon */}
          <button
            onClick={handleToggle}
            className="text-3xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isExpanded ? "✕" : "☰"}
          </button>
        </nav>
      </div>

      {/* Dropdown Menu */}
      {isExpanded && (
        <ul className="absolute top-16 left-0 w-full bg-black text-white flex flex-col gap-4 items-center py-4">
          <li>
            <a href="#about" className="text-lg font-medium hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#samples" className="text-lg font-medium hover:underline">
              Samples
            </a>
          </li>
          <li>
            <a href="#events" className="text-lg font-medium hover:underline">
              Events
            </a>
          </li>
          <li>
            <a href="#contact" className="text-lg font-medium hover:underline">
              Contact
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}

// Main Navigation Component
export default function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Dynamically check the screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isMobile ? <MobileNav isScrolled={isScrolled} /> : <DesktopNav isScrolled={isScrolled} />;
}
