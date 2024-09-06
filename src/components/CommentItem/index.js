// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails, toggleLike, deleteComment} = props
  const {id, name, firstName, comment, isLiked, time, bg} = commentDetails
  const likeImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const addClass = isLiked ? 'sky-blue' : ''
  return (
    <li>
      <div className="content-holder">
        <p className={`user-icon ${bg}`}>{firstName}</p>
        <div className="comment-content">
          <div className="name-holder">
            <h1 className="username">{name}</h1>
            <p className="time-now">{formatDistanceToNow(time)}</p>
          </div>
          <p className="comment-line">{comment}</p>
        </div>
      </div>
      <div className="comment-actions">
        <button
          type="submit"
          className="like-button"
          onClick={() => toggleLike(id)}
        >
          <img src={likeImage} className="image2" alt="like" />
        </button>
        <p className={`icon-name ${addClass}`}>Like</p>
        <button
          type="button"
          className="del-btn"
          data-testid="delete"
          onClick={() => deleteComment(id)}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="del-image"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
