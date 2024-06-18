import { Link } from "react-router-dom";
import {
  TagIcon,
  CalendarDaysIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

const PostDetail = ({ post, relatedPosts }) => {
  const { description, title, image, author, date, type } = post;

  return (
    <>
      <section className="postdetail">
        <div className="detail-bg">
          <h1 className="detail-title">{title}</h1>

          <div className="detail-date-author">
            <p>
              {" "}
              Posted by{" "}
              <Link
                to={`/post-authors/${author}`}
                className="detail-author-text"
              >
                {author}
              </Link>
            </p>
            <p>On {date}</p>
          </div>

          <img className="detail-image" src={image} alt={title} />
          <p className="detail-description">
            &nbsp;&nbsp;&nbsp;&nbsp;{description}
          </p>
          <div className="detail-ctr-icon">
            <PencilSquareIcon className="edit" />
            <TrashIcon className="delete" />
          </div>

          <div className="detail-type">
            <p className="detail-tag">Tags:</p>
            <Link to={`/post-categories/${type}`}>
              <button className="detail-type-btn">{type}</button>
            </Link>
          </div>
        </div>
        <hr className="hr" />

        <h1 className="readnext">Read Next</h1>
        <div className="related-bg">
          <div className="related-card-bg">
            {relatedPosts.map((relatedPost) => (
              <div key={relatedPost.id} className="related-post">
                <h2 className="re-title">{relatedPost.title}</h2>
                <div className="detail-tag-bg">
                <Link to={`/post-categories/${relatedPost.type}`}>
                    <p className="re-type"><TagIcon className="tagicon"/>{relatedPost.type}
                      </p>
                    </Link>
                  </div>
                <Link to={`/post-detail/${relatedPost.id}`}>
                  <img
                    className="re-image"
                    src={relatedPost.image}
                    alt={relatedPost.title}
                  />
                </Link>

                <div className="re-bg">
                  <p>By {relatedPost.author}</p><br />
                    <CalendarDaysIcon className="calicon"/>
                    <p>{relatedPost.date}</p>
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
