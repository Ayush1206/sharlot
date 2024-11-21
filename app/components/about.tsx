"use client"

import React, { useState, useEffect } from "react";

export default function About() {
    const [isMobile, setIsMobile] = useState(false);

    // Dynamically check the screen size
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize(); // Set initial state
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile ? <MobileAbout /> : <DesktopAbout />;
}

function DesktopAbout() {
    return (
        <section
            id="about"
            className="relative min-h-screen bg-black text-white flex items-center justify-between"
        >
            {/* Diagonal Split Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black to-gray-800 clip-diagonal z-0"></div>

            {/* Image Section */}
            <div className="relative w-1/2 h-[56vh] z-10">
                <img
                    src="/images/profileImg.jpg"
                    alt="DJ Sharlot Performing"
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-90"
                />
            </div>

            {/* Text Section with Transparent Background */}
            <div className="relative w-1/2 h-[50vh] flex items-center z-20 pl-6">
                <div className="absolute left-[-10%] w-[70%] p-6 rounded-lg transparent-bg">
                    <h2 className="text-4xl font-bold mb-4">Meet DJ Sharlot</h2>
                    <p className="text-lg leading-relaxed text-gray-300">
                        Dark, Dope, Unstoppable: DJ SHARLOT With half
                        a decade of electrifying performances, this DJ is a true powerhouse known
                        for her sold-out shows and mastery in
                        progressive techno, hard techno, tech house,
                        melodic techno, and psychedelic sounds.
                        Her dark, dramatic sets pulse with energy,
                        creating an intense, hypnotic vibe that
                        captivates the crowd.
                       
                    </p>
                    <p className="mt-4 text-lg leading-relaxed text-gray-300">
                        Whether it's pumping up the crowd at a high-energy event or setting
                        the vibe for an intimate gathering, DJ Sharlot brings passion, energy,
                        and rhythm to every performance.
                    </p>
                </div>
            </div>
        </section>
    );
}

function MobileAbout() {
    return (
        <section
            id="about"
            className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center"
        >
            {/* Image Section */}
            <div className="relative w-full h-[50vh]">
                <img
                    src="/images/profileImg.jpg"
                    alt="DJ Sharlot Performing"
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-90"
                />
            </div>

            {/* Text Section */}
            <div
                className="relative -mt-12 w-[90%] bg-black/50 p-6 rounded-lg"
                style={{
                    backdropFilter: "blur(5px)", // Glass effect
                }}
            >
                <h2 className="text-3xl font-bold mb-4">About DJ Sharlot</h2>
                <p className="text-sm leading-relaxed text-gray-300">
                    DJ Sharlot is known for electrifying performances that blend beats from
                    across the world. With over 10 years of experience spinning decks at
                    clubs, festivals, and private events, Sharlot has mastered the art of
                    creating unforgettable musical journeys.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-gray-300">
                    Whether it's pumping up the crowd at a high-energy event or setting the
                    vibe for an intimate gathering, DJ Sharlot brings passion, energy, and
                    rhythm to every performance.
                </p>
            </div>
        </section>
    );
}
