"use client"
import Link from "next/link";
import React, { useState, useEffect } from "react";

function DesktopNav() {
  return (
    <div className="w-full bg-transparent fixed top-0 z-50">
      <nav className="w-full flex items-center justify-center py-4">
        {/* Centered Navigation */}
        <ul className="flex gap-8 items-center">
          <li>
            <Link href="#about" className="text-lg font-medium hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="#samples" className="text-lg font-medium hover:underline">
              Samples
            </Link>
          </li>
          <li>
            <Link href="/" className="text-3xl font-bold">
              DJ-Sharlot
            </Link>
          </li>
          <li>
            <Link href="#events" className="text-lg font-medium hover:underline">
              Events
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-lg font-medium hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function MobileNav() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => setIsExpanded(!isExpanded);

  return (
    <div className="w-full bg-transparent fixed top-0 z-50">
      <nav className="w-full flex items-center justify-between px-4 py-4">
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

export default function Nav() {
  const [isMobile, setIsMobile] = useState(false);

  // Dynamically check the screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <MobileNav /> : <DesktopNav />;
}
