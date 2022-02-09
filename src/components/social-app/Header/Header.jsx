import style from './Header.module.css';
import logo from './logo.svg';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.inner}>
        <div className={style.logo}>
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
      </div>
    </header>
  )
}
export default Header;