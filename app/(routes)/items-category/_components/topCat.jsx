import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function TopCat({ categoryList, selectedCategory }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {categoryList.map((category, index) => (
          <Link
            key={index}
            href={`/items-category/${category.name}`}
            className="no-underline"
          >
            <div
              className={`p-4 shadow-lg rounded-lg transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.name
                  ? 'bg-gradient-to-r from-orange-600 via-pink-500 to-purple-600 text-white'
                  : 'bg-white text-black hover:shadow-2xl'
              }`}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}${category.icon[0].url}`}
                alt={category.name}
                width={130}
                height={130}
                className="mx-auto"
              />
              <h3 className="text-center mt-4 text-lg font-semibold">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TopCat;
