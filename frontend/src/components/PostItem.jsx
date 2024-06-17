import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
  const { id, title, date, image, author, description, type } = post;
  const shortTitle = title.length > 30 ? title.substr(0, 30) + "..." : title;
  const shortDescription =
    description.length > 150 ? description.substr(0, 150) + "..." : description;
  return (
    <>
      <section className="post">
        <div className="postTitle-bg">
          <p className="post-title">{shortTitle}</p>
        </div>
        <div className="postDate-bg">
          <p className="post-date"> Published: {date}</p>
        </div>
        <Link to={`/post-detail/${id}`}>
          <img src={image} alt={title} className="post-img" />
        </Link>

        <p className="post-description">&nbsp;&nbsp;{shortDescription}</p>
        <div className="post-bottom">
          
          <div className="author-icon">
          <Link to={`/post-authors/${author}`}>
            <UserCircleIcon className="usercircleicon"></UserCircleIcon>
            <small>{author}</small>
          </Link>
          </div>
          
          <div className="typeBtn-bg">
            <Link to={`/post-categories/${type}`}><button className="type-btn">{type}</button></Link>
          </div>
        </div>
        <br />
      </section>
    </>
  );
};

export default PostItem;
