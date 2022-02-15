import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = ({ dialogs, messages }) => {
  return (
    < div className={style.dialogs} >
      <ul className={style.dialogsList}>
        {dialogs
          .map(({ name, id }) => <DialogItem name={name} id={id} />)}
      </ul>

      <ul className={style.dialogsMessages}>
        {messages
          .map(message => <Message value={message} />)}
      </ul>
    </div >
  )
}

export default Dialogs;