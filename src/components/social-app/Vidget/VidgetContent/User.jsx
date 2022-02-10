import style from './User.module.css';


const User = () => {
  return (
    <div className={style.user}>
      <div className={style.avatar}></div>
      <div className={style.info}>
        <h3 className={style.name}>Igor Varekhov</h3>
        <div className={style.dataTable}>
          <span>Birthd Date:</span>
          <span>10. 04. 1989</span>
          <span>City:</span>
          <span>Simferopol</span>
          <span>Web Site</span>
          <span><a href="https://garryvar.ru">https://garryvar.ru</a></span>
        </div>
      </div>
    </div>
  )
}

export default User;