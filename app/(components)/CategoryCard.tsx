import React from "react";
import Image from "next/image";

interface CategoryCardProps {
    image: string;
    title: string;
    isHighlighted?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
    image,
    title,
    isHighlighted = false,
}) => {
    return (
        <div
            className={`flex flex-col items-center justify-center w-36 h-36 md:w-48 md:h-48 rounded-full bg-gray-200 hover:scale-105 transition-transform duration-300 cursor-pointer ${
                isHighlighted ? "bg-purple-600 text-white" : ""
            }`}
        >
            <Image
                src={image}
                alt={title}
                width={280}
                height={280}
                className={`object-contain ${isHighlighted ? "invert" : ""}`}
            />
            <p
                className={`mt-3 text-sm md:text-base font-medium ${
                    isHighlighted ? "text-white" : "text-black"
                }`}
            >
                {title}
            </p>
        </div>
    );
};

export default CategoryCard;
