"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const products = [
    {
        id: 1,
        label: "SALE",
        name: "In-ear Noise Cancelling & Isolating Wireless Earbuds",
        priceOld: "$85.00",
        priceNew: "$70.00",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 2,
        label: "SALE",
        name: 'JP - Space Tablet 10.4" Wi-Fi 32GB',
        priceOld: "$85.00",
        priceNew: "$70.00",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 3,
        label: "SALE",
        name: 'Ocean Pro 11 - 12.3" Touch Screen',
        priceOld: "$85.00",
        priceNew: "$70.00",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 4,
        label: "",
        name: 'Shel 50" Class LED 4K UHD Smart TV',
        priceOld: "",
        priceNew: "$85.00",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 5,
        label: "SALE",
        name: "Fitboot Inspire Fitness Tracker With Heart Rate Tracking",
        priceOld: "$85.00",
        priceNew: "$70.00",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 6,
        label: "SALE",
        name: "Smartphone Z Pixel Max 128GB Unlocked",
        priceOld: "$85.00",
        priceNew: "$70.00",
        image: "https://via.placeholder.com/150",
    },
];

const BestSellers: React.FC = () => {
    return (
        <section className="p-8 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-6">
                Best Sellers
            </h2>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="bg-white rounded-lg shadow-md p-4 text-center relative">
                            {product.label && (
                                <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
                                    {product.label}
                                </span>
                            )}
                            <Image
                                src={product.image}
                                alt={product.name}
                                className="w-full h-32 object-contain mb-4"
                                height={400}
                                width={400}
                            />
                            <h3 className="text-sm font-semibold mb-2">
                                {product.name}
                            </h3>
                            {product.priceOld && (
                                <p className="text-gray-500 line-through text-sm">
                                    {product.priceOld}
                                </p>
                            )}
                            <p className="text-purple-600 font-bold">
                                {product.priceNew}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex justify-center mt-6">
                <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition">
                    View All
                </button>
            </div>
        </section>
    );
};

export default BestSellers;
