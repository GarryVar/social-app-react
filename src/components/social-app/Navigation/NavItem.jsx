import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';

const Navitem = props => {
  return (
    <li>
      <NavLink className={style.link} to={props.value.link}>
        <span class={style.icon}>{props.value.icon}</span>
        <span className={style.text}>{props.value.text}</span>
      </NavLink>
    </li>
  )
}

export default Navitem;