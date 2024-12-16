"use client";
import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
    return (
        <section className="bg-gray-100 flex items-center justify-center px-6 py-12">
            <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Text Content */}
                <div>
                    <span className="bg-red-500 text-white text-sm px-3 py-1 rounded">
                        Best Prices
                    </span>
                    <h1 className="text-4xl font-bold mt-4">
                        Incredible Prices on All Your Favorite Items
                    </h1>
                    <p className="text-purple-700 mt-4">
                        Get more for less on selected brands
                    </p>
                    <button className="mt-6 bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-900 transition">
                        Shop Now
                    </button>
                </div>

                {/* Product Image */}
                <div>
                    <Image
                        src="https://via.placeholder.com/500x300"
                        alt="Smartwatch"
                        className="rounded shadow-lg"
                        height={500}
                        width={300}
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
