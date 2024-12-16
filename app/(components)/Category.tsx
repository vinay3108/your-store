import React from 'react';

interface CategoryProps {
  title: string;
  icon: React.ReactNode;
  href: string;
}

const Category: React.FC<CategoryProps> = ({ title, icon, href }) => {
  return (
    <a href={href} className="flex flex-col items-center justify-center gap-4 bg-white rounded-lg p-6 hover:bg-gray-100">
    {icon}
    <h3 className="text-lg font-medium">{title}</h3>
  </a>
  );
};

export default Category;