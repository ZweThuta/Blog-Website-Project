import { useLoaderData } from "react-router-dom";
import PostItem from "../components/PostItem";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <section className="post-page">
    
        {posts.length > 0 &&
          posts.map((post) => (
            <section key={post.id} >
                <PostItem post={post}  />
              </section>
          ))}
      
    </section>
  );
};

export default Posts;
export const loader = async () => {
  const response = await fetch(import.meta.env.VITE_APP_DOMAIN);
  if (!response.ok) {
    throw new Error("Sorry! Someting went wrong.");
  } else {
    const data = await response.json();
    return data.posts;
  }
};
