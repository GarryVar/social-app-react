import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import User from "./User/User";
import Picture from "./Picture/Picture";

const Profile = ({profilePage, addPost, updateNewPostText}) => {
  return (
    <div className={style.profile}>
      <div className={style.inner}>

        <Picture />
        <div className={style.content}>
          <User />
        </div>

        <div className={style.footer}>
          <MyPosts
            posts={profilePage.posts}
            newPostText={profilePage.newPostText}
            updateNewPostText={updateNewPostText}
            addPost={addPost} />
        </div>
      </div>
    </div>
  )
}
export default Profile;
