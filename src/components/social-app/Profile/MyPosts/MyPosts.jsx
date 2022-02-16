import PostItem from '../PostItem/PostItem';
import style from '../Profile.module.css';

const MyPosts = ({ posts }) => {
  return (
    <section className={style.posts}>
      <h2>My posts</h2>
      <ul className={style.list}>
        {posts.map(({ id ,likes, message}) => <PostItem likes={likes} message={message}  key={id}/>)}
      </ul>
    </section>
  )
}

export default MyPosts;
