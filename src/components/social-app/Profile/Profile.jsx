import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import User from "./User/User";


const Profile = ({ posts, addPost }) => {
  return (
    <div className={style.profile}>
      <div className={style.inner}>

        {/* Content */}
        <div className={style.content}>
          <User />
        </div>

        {/* Footer */}
        <div className={style.footer}>
          <MyPosts posts={posts} addPost={addPost } />
        </div>
      </div>
    </div>
  )
}
export default Profile;
