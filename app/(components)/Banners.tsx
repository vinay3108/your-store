import React from "react";
import HeroBanner from "./HeroBanner";
const Banners = () => {
    return (
        <div className="grid grid-cols-2">
            <HeroBanner
                backgroundImage="/images/mobile1.jpg"
                title="Up to 30% off"
                subtitle="Selected Smartphone Brands"
                buttonText="Shop Now"
            />

            <HeroBanner
                backgroundImage="/images/mobile2.jpg"
                title="Take Your Sound Anywhere"
                subtitle="Top Headphone Brands"
                buttonText="Shop Now"
            />
        </div>
    );
};

export default Banners;
