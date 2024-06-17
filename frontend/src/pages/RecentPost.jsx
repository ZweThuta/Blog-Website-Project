import { Link } from "react-router-dom";

const RecentPost = ({recentpost}) => {
  const { id, title, date, image, author, description, type } = recentpost;

  return (
    <div className="related-bg">
    <h1 className="readnext">Read Next</h1>
    <hr />
      <div className="related-post">
        <h2 className="re-title">{title}</h2>
        <Link to={`/post-detail/${id}`}>
          <img
            className="re-image"
            src={image}
            alt={title}
          />
        </Link>

        <div className="re-bg">
          <p className="re-author">
            Author:&nbsp;
            {author}
          </p>
          <p className="re-date">
            Published at:&nbsp;
            {date}
          </p>
        </div>
      </div>
  </div>
  )
}

export default RecentPost