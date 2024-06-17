import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryPost from '../pages/CategoryPost';

const Category = () => {
  const posts = useLoaderData();
  return (
    <section className="post-page">
      {posts.length > 0 ? (
        posts.map((post) => (
          <CategoryPost post={post} key={post.id} />
        ))
      ) : (
        <p>No posts available for this category</p>
      )}
    </section>
  );
};

export default Category;

export const loader = async ({ params }) => {
  const { type } = params;
  const response = await fetch(`${import.meta.env.VITE_APP_DOMAIN}`);
  if (!response.ok) {
    throw new Error("Sorry! Something went wrong.");
  } else {
    const data = await response.json();
    const filteredPosts = data.posts.filter(post => post.type === type);
    return filteredPosts;
  }
};
