import { v4 as id } from 'uuid';
import style from './Navigation.module.css';
import Navitem from './NavItem';

const Navigation = props => {
  let navItemData = props.value.map(link => <Navitem value={link} key={id().split('-').join('')} />)

  return (
    <nav className={style.nav}>
      <div className={style.inner}>
        <ul className={style.list}>{navItemData}</ul>
      </div>
    </nav>
  )
}

export default Navigation;