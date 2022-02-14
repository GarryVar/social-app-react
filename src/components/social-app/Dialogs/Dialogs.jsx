import style from './Dialogs.module.css';
import { Link } from 'react-router-dom';

const DialogItem = ({ id, name }) => {
  return (
    <li className={style.dialog}>
      <Link to={`/dialogs/${id}`}>{name}</Link>
    </li >
  )
}


const Message = ({ value }) => {
  return (
    <div className={style.messag}>{value}</div>
  )
}


const Dialogs = () => {
  return (
    <div className={style.dialogs}>
      <ul className={style.dialogsList}>
        <DialogItem name="Димон" id="1" />
        <DialogItem name="Игорь" id="2" />
        <DialogItem name="Артём" id="2" />
        <DialogItem name="Саша" id="3" />
      </ul>

      <ul className={style.dialogsMessages}>
        <Message value={'Привет всем!!'} />
        <Message value={'Здарова'} />
        <Message value={'Как дела?'} />
        <Message value={'Все норм'} />
      </ul>

    </div>
  )
}

export default Dialogs;