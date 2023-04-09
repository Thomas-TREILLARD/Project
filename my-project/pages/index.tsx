import Head from 'next/head'
import React from 'react';
import Link from 'next/link';

import { getPosts, getCategories } from '../services';
import { Tab, Categories, PostCard } from '../components';

// Fetch data at build time
export async function getStaticProps() {
  const posts = await getPosts()
  const categories = await getCategories()
  return {
    props: { posts, categories},
  };
}

export default function Home({ posts, categories }) {
  return (
    <>
    <Tab categories={categories} />
    <div className="container mx-auto px-10 mb-8">
        <div className="text-center w-full mt-36">
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
    </div>
    </>
  );
}