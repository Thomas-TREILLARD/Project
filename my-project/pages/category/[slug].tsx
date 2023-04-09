import React from 'react';
import { useRouter } from 'next/router';
import { getCategories, getCategoryPosts } from '../../services';
import { Tab, PostCard, Categories, Loader } from '../../components';

const CategoryPost = ({ posts, categories }) => {
  return (
    <>
    <Tab categories={categories}/>
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPosts(params.slug);
  const categories = await getCategories()
  return {
    props: { posts, categories},
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}