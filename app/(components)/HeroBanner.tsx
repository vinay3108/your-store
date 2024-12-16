"use client";
import React from "react";

interface HeroBannerProps {
    backgroundImage: string;
    title: string;
    subtitle: string;
    buttonText: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
    backgroundImage,
    title,
    subtitle,
    buttonText,
}) => {
    return (
        <section
            className="relative flex flex-col justify-center items-start text-white px-8 py-12 m-8"
            style={{
                backgroundImage: `url('${backgroundImage}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "500px", // Adjust height as needed
            }}
        >
            {/* Overlay for Better Text Contrast */}
            <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

            <div className="z-10 space-y-4">
                <h2 className="text-4xl font-bold">{title}</h2>
                <p className="text-lg">{subtitle}</p>
                <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-300 transition">
                    {buttonText}
                </button>
            </div>
        </section>
    );
};

export default HeroBanner;
