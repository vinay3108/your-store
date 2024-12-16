"use client";
import React from "react";

const FeaturesSection: React.FC = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8 text-center">
            {/* Feature 1 */}
            <div className="flex flex-col items-center">
                <span className="text-purple-600 text-4xl mb-2">🚗</span>
                <h3 className="font-semibold">Curb-side Pickup</h3>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center">
                <span className="text-purple-600 text-4xl mb-2">📦</span>
                <h3 className="font-semibold">
                    Free Shipping on Orders Over $50
                </h3>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center">
                <span className="text-purple-600 text-4xl mb-2">💰</span>
                <h3 className="font-semibold">Low Prices Guaranteed</h3>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center">
                <span className="text-purple-600 text-4xl mb-2">⏳</span>
                <h3 className="font-semibold">Available 24/7</h3>
            </div>
        </section>
    );
};

export default FeaturesSection;
