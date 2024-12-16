"use client";
import React from "react";

const Navbar: React.FC = () => {
    return (
        <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Your Store</h1>
            <div className="space-x-6">
                <a href="#" className="hover:underline">
                    About
                </a>
                <a href="#" className="hover:underline">
                    Contact
                </a>
                <a href="#" className="hover:underline">
                    Help Center
                </a>
                <a href="#" className="hover:underline">
                    Call Us: 123-456-7890
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
