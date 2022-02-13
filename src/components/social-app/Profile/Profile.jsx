import ProfileIcon from './../Navigation/icon-components/ProfileIcon';
import style from './Profile.module.css';
import MessageForm from './../MessageForm/MessaageForm';
import Vidget from './../Vidget/Vidget';
import User from './../Vidget/VidgetContent/User';
import AppLib from '../Vidget/VidgetContent/App-lib';

const Profile = props => {
  return (
    <div className={style.profile}>
      <div className={style.inner}>

        {/* Header */}
        {/* <div className={style.header}>
          <div className={style.icon}><ProfileIcon /></div>
          <h2 className={style.title}>Profile</h2>
        </div> */}

        {/* Content */}
        <div className={style.content}>
          <Vidget data={<User />} />
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