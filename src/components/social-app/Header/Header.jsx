import style from './Header.module.css';
import Logo from './../Logo/Logo';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.inner}>
        <Logo />
      </div>
    </header >
  )
}
export default Header;
