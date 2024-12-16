"use client";
import React from "react";
import Image from "next/image";

const HeroBanner: React.FC = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-gray-50">
            {/* Left Banner */}
            <div className="bg-red-600 text-white p-8 rounded-lg relative">
                <h2 className="text-4xl font-bold">Up to 30% off</h2>
                <p className="mt-2 text-lg">Selected Smartphone Brands</p>
                <button className="mt-6 bg-white text-black px-6 py-2 rounded hover:bg-gray-300 transition">
                    Shop
                </button>
                <Image
                    src="https://via.placeholder.com/200x300"
                    alt="Smartphone"
                    className="absolute bottom-0 right-4"
                    height={400}
                    width={400}
                />
            </div>

            {/* Right Banner */}
            <div className="bg-purple-600 text-white p-8 rounded-lg relative">
                <h2 className="text-4xl font-bold">Take Your Sound Anywhere</h2>
                <p className="mt-2 text-lg">Top Headphone Brands</p>
                <button className="mt-6 bg-white text-black px-6 py-2 rounded hover:bg-gray-300 transition">
                    Shop
                </button>
                <Image
                    src="https://via.placeholder.com/200x300"
                    alt="Headphones"
                    className="absolute bottom-0 right-4"
                    height={400}
                    width={400}
                />
            </div>
        </section>
    );
};

export default HeroBanner;
