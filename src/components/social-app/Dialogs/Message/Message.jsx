import style from '../Dialogs.module.css';

const Message = ({ value }) => {
  return (
    <div className={style.message}>{value}</div>
  )
}

export default Message;