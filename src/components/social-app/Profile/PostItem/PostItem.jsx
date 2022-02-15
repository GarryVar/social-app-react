import style from '../Profile.module.css';
import PostAvatar from './../MyPosts/PostAvatar/PostAvatar';

const PostItem = ({ message }) => {
  return (
    <>
      <li className={style.postItem}>
        <PostAvatar />
        <p>{message}</p>
      </li>
    </>
  )
}

export default PostItem;