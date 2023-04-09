import React from 'react';
import Link from 'next/link';

const Header = ({ categories }) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-green">FLOWERS</span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <a key={index} href={`/category/${category.slug}`}><span className="text-xl">{category.name}</span></a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;