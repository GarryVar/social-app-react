import { Link } from 'react-router-dom';
import style from './Navigation.module.css';


const Navitem = ({ value }) => {
  return (
    <li>
      <Link className={style.link} to={value.link}>
        <span class={style.icon}>{value.icon}</span>
        <span className={style.text}>{value.text}</span>
      </Link>
    </li >
  )
}
export default Navitem;