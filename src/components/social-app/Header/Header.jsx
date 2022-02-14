import style from './Header.module.css';
import Logo from './../Logo/Logo';
import SearchForm from './../SearchForm/SearchForm';



const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.inner}>
        <Logo />
        <SearchForm />
      </div>
    </header >
  )
}
export default Header;