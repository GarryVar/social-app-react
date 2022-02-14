import style from './Header.module.css';
import logo from './logo.svg';
import SearchForm from './../../SearchForm/SearchForm';

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.inner}>
        <div className={style.logo}>
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <SearchForm />
      </div>
    </header>
  )
}
export default Header;