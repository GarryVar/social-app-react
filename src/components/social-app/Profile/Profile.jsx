import style from './Profile.module.css';
import MessageForm from './../MessageForm/MessaageForm';
import User from './../Vidget/VidgetContent/User';
import Vidget from '../Vidget/Vidget';
import MyPosts from './MyPosts/MyPosts';

const Profile = ({ posts }) => {

  return (
    <div className={style.profile}>
      <div className={style.inner}>

        {/* Content */}
        <div className={style.content}>
          <Vidget data={<User />} />
        </div>

        {/* Footer */}
        <div className="footer">
          <MessageForm />
          <Vidget data={<MyPosts posts={posts} />} />
        </div>
      </div>
    </div>
  )
}

export default Profile;