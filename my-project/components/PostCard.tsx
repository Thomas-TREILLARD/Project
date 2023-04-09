import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({ post, categories }) => (
  <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
    <div className="relative overflow-hidden shadow-md mb-4 h-80">
      <img src={post.image} alt="" className="w-full h-full object-cover shadow-lg rounded-t-lg" />
    </div>
    <h1 className="transition duration-700 text-center mb-4 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
      <Link href={`/post/${post.slug}`}>{post.headline}</Link>
    </h1>
    <p className="text-center text-md text-gray-700 px-4 mb-4">
      {post.excerpt}
    </p>
    <div className="text-center">
      <Link href={`/post/${post.slug}`} className="relative inline-flex items-center justify-center p-0.5 mb-4 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Continue Reading</span>
      </Link>
    </div>
  </div>
);

export default PostCard;