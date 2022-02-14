import ProfileIcon from './../Navigation/icon-components/ProfileIcon';
import style from './Profile.module.css';
import MessageForm from './../MessageForm/MessaageForm';
import User from './../Vidget/VidgetContent/User';

const Profile = () => {
  return (
    <div className={style.profile}>
      <div className={style.inner}>

        {/* Header */}
        <div className={style.header}>
          <div className={style.icon}><ProfileIcon /></div>
          <h2 className={style.title}>Profile</h2>
        </div>

        {/* Content */}
        <div className={style.content}>
          <User />
        </div>

        {/* Footer */}
        <div className="footer">
          <MessageForm />
        </div>
      </div>
    </div>
  )
}

export default Profile;