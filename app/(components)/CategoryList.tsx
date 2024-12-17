import React from "react";
import CategoryCard from "./CategoryCard";

const CategoryList: React.FC = () => {
    return (
        <>
            <h2 className="text-3xl font-bold text-center mb-6">
                Shop by Category
            </h2>
            <div className="grid grid-cols-5 gap-4 p-8">
                <CategoryCard
                    title="Computers"
                    image="/images/mobile6-r.png"
                />
                <CategoryCard
                    title="Computers"
                    image="/images/mobile6-r.png"
                />
                <CategoryCard
                    title="Computers"
                    image="/images/mobile6-r.png"
                />
                <CategoryCard
                    title="Computers"
                    image="/images/mobile6-r.png"
                />
                <CategoryCard
                    title="Computers"
                    image="/images/mobile6-r.png"
                />
            </div>
        </>
    );
};

export default CategoryList;
