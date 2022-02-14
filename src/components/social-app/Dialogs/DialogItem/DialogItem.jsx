import { Link } from 'react-router-dom';
import style from '../Dialogs.module.css';

const DialogItem = ({ id, name }) => {
  return (
    <li className={style.dialog}>
      <Link to={`/dialogs/${id}`}>{name}</Link>
    </li >
  )
}

export default DialogItem;