import React from 'react';
import { getPost, getPosts, getCategories } from '../../services';
import { PostDetail, Categories, Loader, Tab } from '../../components';


const PostDetails = ({ post, categories }) => {
  return (
    <>
    <Tab categories={categories}/>
    <div className="relative overflow-hidden rounded-md shadow-md w-4/5 h-80 mb-10 mx-auto mt-36">
        <img src={post.image} alt="" className="w-full h-full object-cover mx-auto"/>
      
    </div>
    <article className="prose prose-lg mx-auto w-5/6" dangerouslySetInnerHTML={{ __html: post.content }} />
    </>
  );
};
export default PostDetails;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const post = await getPost(params.slug)
  const categories = await getCategories()
  return {
    props: { post, categories},
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ slug } ) => ({ params: { slug } })),
    fallback: true,
  };
}