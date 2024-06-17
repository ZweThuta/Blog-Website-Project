import React from "react";
import { useLoaderData } from "react-router-dom";
import AuthorPost from "../pages/AuthorPost";

const Author = () => {
    const posts = useLoaderData();
    return (
        <> 
      <section className="post-page">
        {posts.length > 0 ? (
          posts.map((post) => (
            <AuthorPost post={post} key={post.id} />
          ))
        ) : (
          <p>No posts available for this Author</p>
        )}
      </section>
      </>
    );
  };
  
  export default Author;
  
  export const loader = async ({ params }) => {
    const { author } = params;
    const response = await fetch(`${import.meta.env.VITE_APP_DOMAIN}`);
    if (!response.ok) {
      throw new Error("Sorry! Something went wrong.");
    } else {
      const data = await response.json();
      const filteredPosts = data.posts.filter(post => post.author === author);
      return filteredPosts;
    }
  };
  