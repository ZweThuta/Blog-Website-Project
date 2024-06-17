import React from 'react'
import RecentPost from '../pages/RecentPost'
import { useLoaderData } from 'react-router-dom'

const Recent = () => {
  const posts = useLoaderData();
  return (
    <div>
      {posts.length > 0 ? (
        posts.map((recentpost) => (
          <RecentPost recentpost={recentpost} key={recentpost.id} />
        ))
      ) : (
        <p>No posts available for this category</p>
      )}
    </div>
  )
}

export default Recent;
export const loader = async ({ params }) => {
  const response = await fetch(`${import.meta.env.VITE_APP_DOMAIN}`);
  if (!response.ok) {
    throw new Error("Sorry! Something went wrong.");
  } else {
    const data = await response.json();
    const filteredPosts = data.posts.filter(post => post.id !== params.id);
    const shuffledPosts = filteredPosts.sort(() => 0.5 - Math.random());
    const topThreePosts = shuffledPosts.slice(0, 3);
    return topThreePosts;
  }
};