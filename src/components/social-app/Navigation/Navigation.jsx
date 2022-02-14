import { v4 as id } from 'uuid';
import style from './Navigation.module.css';
import Navitem from './NavItem';

const Navigation = ({ items }) => {
  return (
    <nav className={style.nav}>
      <div className={style.inner}>
        <ul className={style.list}>{items.map(link => <Navitem value={link} key={id().split('-').join('')} />)}</ul>

        <button type="button" className={style.navButton}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 341.333 341.333">
            <path d="M0 277.333h341.333V320H0zM0 149.333h341.333V192H0zM0 21.333h341.333V64H0z" />
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Navigation;