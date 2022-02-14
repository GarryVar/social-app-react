import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = () => {

  let dialogs = [
    { name: "Димон", id: 1 },
    { name: "Игорь", id: 2 },
    { name: "Артём", id: 3 },
    { name: "Саша", id: 4 },
    { name: "Андрей", id: 5 },
  ]

  let messages = [
    { id: 1, message: 'Привет!' },
    { id: 2, message: 'Здаров ! как ты?' },
    { id: 3, message: 'Чё делаешь?' },
    { id: 4, message: 'Вот и я всенм пирвет!' },
    { id: 5, message: 'И тебе не хворать =)' },
  ]


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