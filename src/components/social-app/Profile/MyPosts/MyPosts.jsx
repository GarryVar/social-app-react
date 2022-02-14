import PostItem from '../PostItem/PostItem';
import style from '../Profile.module.css';

const MyPosts = () => {
  let posts = [
    { id: 1, message: 'Привет всем фронтендерам!' },
    { id: 2, message: 'react cool' },
  ]

  return (
    <section className={style.posts}>
      <h2>My posts</h2>
      <ul className={style.list}>
        {posts.map(m => <PostItem message={m.message} />)}
      </ul>
    </section>
  )
}

export default MyPosts;