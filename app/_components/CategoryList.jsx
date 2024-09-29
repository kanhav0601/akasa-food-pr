"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link from next/link

function CategoryList({ categoryList }) {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const duplicatedCategoryList = [...categoryList, ...categoryList];

    return (
        <div className='mt-[30px]'>
            <h2 className='text-center text-orange-600 font-bold text-3xl md:text-4xl lg:text-5xl'>
                What's Your Mood?
            </h2>
            <div
                className='marquee'
                style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
            >
                <div
                    className='marquee-inner'
                    style={{
                        display: 'inline-block',
                        animation: 'marquee 12s linear infinite',
                        willChange: 'transform',
                    }}
                >
                    {duplicatedCategoryList.map((category, index) => (
                        <Link
                            key={index}
                            href={`/items-category/${category.name}`} // Fix the href
                            className='category-link'
                        >
                            <div
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                style={{
                                    display: 'inline-block',
                                    margin: '20px',
                                    transition: 'transform 0.1s, box-shadow 0.3s',
                                }}
                            >
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}${category.icon[0].url}`}
                                    alt={category.name}
                                    width={130}
                                    height={130}
                                    className='hover:scale-125 transition-all ease-in-out'
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); } // Adjust for duplicated list
                }
                .marquee:hover .marquee-inner {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}

export default CategoryList;
