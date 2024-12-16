"use client";
import React, { useState, useEffect } from "react";

const HeroSection: React.FC = () => {
    // Array of background images
    const bgImages = [
        "/images/hero1.png",
        "/images/hero2.png",
        "/images/hero3.png",
    ];

    // State to track the current background image
    const [bgImage, setBgImage] = useState(bgImages[0]);

    useEffect(() => {
        let current = 0;
        const interval = setInterval(() => {
            current = (current + 1) % bgImages.length; // Cycle through images
            setBgImage(bgImages[current]); // Update background image
        }, 5000);

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <section
            className="relative w-full h-screen flex items-center flex-start text-black px-6"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",  // This makes sure the entire image fits within the container
                backgroundPosition: "bottom center",  // Centers the image within the container
                backgroundRepeat: "no-repeat",  // Ensures the image doesn't repeat
                height: "700px",
                width:"100%"
            }}
        >
            <div className="relative z-10 ml-24">
                {/* Left Text Content */}
                <div className="flex flex-col justify-center">
                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded w-fit">
                        Best Prices
                    </span>
                    <h1 className="text-5xl font-bold mt-4 leading-tight">
                        Incredible Prices on <br /> All Your Favorite Items
                    </h1>
                    <p className="text-gray-700 text-lg mt-4">
                        Get more for less on selected brands
                    </p>
                    <button className="mt-6 bg-purple-700 text-white font-semibold px-8 py-3 rounded-full hover:bg-purple-900 transition duration-300">
                        Shop Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
