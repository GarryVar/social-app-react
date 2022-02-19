import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import User from "./User/User";
import Picture from "./Picture/Picture";

const Profile = ({ posts, addPost }) => {
  return (
    <div className={style.profile}>
      <div className={style.inner}>
        <Picture />

        <div className={style.content}>
          <User />
        </div>

        <div className={style.footer}>
          <MyPosts posts={posts} addPost={addPost } />
        </div>
      </div>
    </div>
  )
}
export default Profile;
