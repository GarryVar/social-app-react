import PostItem from '../PostItem/PostItem';
import style from '../Profile.module.css';
import React from 'react';


const MyPosts = ({posts, addPost, updateNewPostText}) => {
  let newPostElement = React.createRef();

  let onPostChange = () => {
    let textValue = newPostElement.current.value;
    updateNewPostText(textValue);
  };


  return (
    <>
      <form className="form" onSubmit={evt => evt.preventDefault()}>
        <div className={style.inner}>
          <label htmlFor="message">
            <textarea
              ref={newPostElement}
              onChange={onPostChange}
              name="message"
              id="message"
              rows="5"
              placeholder="Post message" />
          </label>
          <button type="submit" onClick={addPost}>Send</button>
        </div>
      </form >
        <section className={style.posts}>
          <h2>My posts</h2>
          <ul className={style.list}>
            {posts.map(({ id ,likes, message}) => <PostItem likes={likes} message={message}  key={id}/>)}
          </ul>
        </section>
    </>
  )
}

export default MyPosts;
