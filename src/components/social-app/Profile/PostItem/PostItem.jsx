import style from '../Profile.module.css';
import PostAvatar from './../MyPosts/PostAvatar/PostAvatar';
import Likes from './../Likes/Likes';


const PostItem = ({ likes, message }) => {
  return (
    <>
      <li className={style.postItem}>
        <PostAvatar />
        <p>{message}</p>
        <Likes likes={likes} />
      </li>
    </>
  )
}

export default PostItem;