import style from './Profile.module.css';
import MessageForm from './../MessageForm/MessaageForm';
import User from './../Vidget/VidgetContent/User';
import MyPosts from './MyPosts/MyPosts';
import Picture from "./Picture/Picture";
import Vidget from "../Vidget/Vidget";


const Profile = ({ posts }) => {
  return (
    <div className={style.profile}>
      <div className={style.inner}>
        <Picture />
        {/* Content */}
        <div className={style.content}>
          <Vidget data={<User />} />
        </div>

        {/* Footer */}
        <div className="footer">
          <MessageForm />
          <Vidget data={<MyPosts posts={posts} />}/>
        </div>
      </div>
    </div>
  )
}

export default Profile;
