import React from "react";
import Category from "../(components)/Category";
import { FaLaptop, FaMobileAlt, FaTag, FaTabletAlt } from "react-icons/fa";

const CategoryList: React.FC = () => {
    return (
        <div className="grid grid-cols-5 gap-4 p-8">
            <Category
                title="Computers"
                icon={
                    <FaLaptop className="text-2xl text-white bg-blue-500 rounded-full p-2" />
                }
                href="/computers"
            />
            <Category
                title="Mobile"
                icon={
                    <FaMobileAlt className="text-2xl text-white bg-green-500 rounded-full p-2" />
                }
                href="/mobile"
            />
            <Category
                title="Sale"
                icon={
                    <FaTag className="text-2xl text-white bg-red-500 rounded-full p-2" />
                }
                href="/sale"
            />
            <Category
                title="Tablets"
                icon={
                    <FaTabletAlt className="text-2xl text-white bg-purple-500 rounded-full p-2" />
                }
                href="/tablets"
            />
        </div>
    );
};

export default CategoryList;
