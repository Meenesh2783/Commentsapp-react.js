import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
const Comments = () => {
  const [comments, setComments] = useState([])
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')

  const onAddButton = e => {
    e.preventDefault()
    const newComment = {
      id: uuidv4(),
      name,
      firstName: name.slice(0, 1),
      comment,
      isLiked: false,
      time: new Date(),
      bg: initialContainerBackgroundClassNames[Math.floor(Math.random() * 7)],
    }
    setComments([...comments, newComment])
    setName('')
    setComment('')
  }

  const toggleLike = id => {
    setComments(prevComments =>
      prevComments.map(eachComment =>
        eachComment.id === id
          ? {...eachComment, isLiked: !eachComment.isLiked}
          : eachComment,
      ),
    )
  }

  const deleteComment = id => {
    setComments(prevComments =>
      prevComments.filter(eachValue => eachValue.id !== id),
    )
  }

  return (
    <div className="comments-page">
      <h1>Comments</h1>
      <div className="comments-section">
        <div className="comments-inputsection">
          <p>Say something about 4.0 technologies</p>
          <form className="element-holder" onSubmit={onAddButton}>
            <input
              className="input-name"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <textarea
              className="comment-field"
              placeholder="Your comment"
              value={comment}
              onChange={e => setComment(e.target.value)}
            />
            <button type="submit" className="add-button">
              Add Commentss
            </button>
          </form>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
          alt="comments"
        />
      </div>
      <hr />
      <p>{`${comments.length} comments`}</p>
      <ul className="comments-list">
        {comments.map(eachComment => (
          <CommentItem
            key={eachComment.id}
            commentDetails={eachComment}
            toggleLike={toggleLike}
            deleteComment={deleteComment}
          />
        ))}
      </ul>
    </div>
  )
}

export default Comments
