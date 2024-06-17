import React from "react";
import PostDetail from "../components/PostDetail";
import { useLoaderData } from "react-router-dom";

const Detail = () => {
  const { post, relatedPosts } = useLoaderData();

  return (
    <>
      <PostDetail post={post} relatedPosts={relatedPosts} />
    </>
  );
};

export default Detail;
 


export const loader = async ({ request, params }) => {
  const postResponse = await fetch(`${import.meta.env.VITE_APP_DOMAIN}/${params.id}`);
  const postsResponse = await fetch(`${import.meta.env.VITE_APP_DOMAIN}`);

  if (!postResponse.ok || !postsResponse.ok) {
    throw new Error('Failed to fetch data');
  }

  const postData = await postResponse.json();
  const postsData = await postsResponse.json();

  const relatedPosts = postsData.posts
    .filter(post => post.id !== params.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return {
    post: postData.post,
    relatedPosts,
  };
};
