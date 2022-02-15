import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = ({ dialogs, messages }) => {
  return (
    <div className={style.dialogs}>
      <ul className={style.dialogsList}>
        {dialogs
          .map(d => <DialogItem name={d.name} id={d.id} />)}
      </ul>

      <ul className={style.dialogsMessages}>
        {messages
          .map(m => <Message value={m.message} />)}
      </ul>
    </div>
  )
}

export default Dialogs;