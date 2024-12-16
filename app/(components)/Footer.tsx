"use client";
import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white text-center p-4">
            <p>
                &copy; {new Date().getFullYear()} Your Store. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
