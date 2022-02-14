import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = () => {
  return (
    <div className={style.dialogs}>
      <ul className={style.dialogsList}>
        <li className={style.dialog}>
          <NavLink path="/dialogs/1">Andrew</NavLink>
        </li>
        <li className={style.dialog}>
          <NavLink path="/dialogs/2">James</NavLink>
        </li>
        <li className={style.dialog}>
          <NavLink path="/dialogs/2">Sarah</NavLink>
        </li>
        <li className={style.dialog}>
          <NavLink path="/dialogs/3">Frank</NavLink>
        </li>
        <li className={style.dialog}>
          <NavLink path="/dialogs/4">Julia</NavLink>
        </li>
        <li className={style.dialog}>
          <NavLink path="/dialogs/1">
            Kevin
          </NavLink>
        </li>
      </ul>

      <ul className={style.dialogsMessages}>
        <li className={style.message}>Hey all!</li>
        <li className={style.message}>Hi Sarah how are you?</li>
        <li className={style.message}>Hey guys</li>
        <li className={style.message}>=)</li>
      </ul>

    </div>
  )
}

export default Dialogs;