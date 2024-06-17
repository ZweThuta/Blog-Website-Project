import { Link } from "react-router-dom";
import {
  UserIcon,
  CalendarDaysIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

const PostDetail = ({ post, relatedPosts }) => {
  const { id, description, title, image, author, date } = post;

  return (
    <>
      <section className="postdetail">
        <div className="detail-bg">
          <h1 className="detail-title">{title}</h1>
          <div className="da-bg">
            <div className="da-bg2">
            <p className="detail-author">
              <UserIcon className="usericon" />
              {author}
            </p>
            <p className="detail-date">
              <CalendarDaysIcon className="calicon" />
              {date}
            </p>
            </div>
            <div className="postctr">
              <PencilSquareIcon className="edit">Edit</PencilSquareIcon>
              <TrashIcon className="delete">Delete</TrashIcon>
            </div>
          </div>
          <img className="detail-image" src={image} alt={title} />
          <p className="detail-description">
            &nbsp;&nbsp;&nbsp;&nbsp;{description}
          </p>
          
          <hr />
        </div>
        <h1 className="readnext">Read Next</h1>
        <div className="related-bg">
          <hr />
          <div className="related-card-bg">
          {relatedPosts.map((relatedPost) => (
            <div key={relatedPost.id} className="related-post">
              <h2 className="re-title">{relatedPost.title}</h2>
              <Link to={`/post-detail/${relatedPost.id}`}>
                <img
                  className="re-image"
                  src={relatedPost.image}
                  alt={relatedPost.title}
                />
              </Link>

              <div className="re-bg">
                <p>By {relatedPost.author} on {relatedPost.date}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PostDetail;
