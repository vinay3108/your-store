'use client';

import Image from "next/image";
import Link from "next/link";

const BestPriceBanner = () => {
  return (
      <section className="relative bg-gray-50 py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            {/* Left Side - Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-md lg:max-w-lg">
                <Image
                  src="/laptop-tablet.png" // Replace with your image path
                  alt="Laptop and Tablet"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
  
            {/* Right Side - Text */}
            <div className="text-center lg:text-left lg:pl-8">
              <span className="text-red-600 text-lg font-semibold uppercase">
                Best Price
              </span>
              <h1 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl leading-tight">
                Save up to <span className="text-indigo-600">$150</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
                On selected laptop & tablet brands. Terms and conditions apply.
              </p>
              <div className="mt-6">
                <Link
                  href="/shop"
                  className="inline-block rounded bg-indigo-600 px-6 py-3 text-white font-medium hover:bg-indigo-700 transition duration-300"
                >
                  Shop
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default BestPriceBanner;
