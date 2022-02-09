import ProfileIcon from './../Navigation/icon-components/ProfileIcon';
import style from './Profile.module.css';
import MessageForm from './../MessageForm/MessaageForm';

const Profile = props => {
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
          <div className={style.user}>
            <div className={style.avatar}></div>

            <div className={style.info}>
              <h3 className={style.name}>Igor Varekhov</h3>
              <div className={style.dataTable}>
                <span>Birthd Data:</span>
                <span>10. 04. 1989</span>
                <span>City:</span>
                <span>Simferopol</span>
                <span>Web Site</span>
                <span><a href="https://garryvar.ru">garryvar.ru</a></span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="footer">
            <MessageForm />
          </div>
        </div>
      </div >
    </div >
  )
}

export default Profile;