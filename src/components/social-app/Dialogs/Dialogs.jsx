import style from './Dialogs.module.css';

const Dialogs = () => {
  return (

    <div className={style.dialogs}>
      <ul className={style.dialogsList}>
        <li className={style.dialog}>Andrew</li>
        <li className={style.dialog}>James</li>
        <li className={style.dialog}>Sarah</li>
        <li className={style.dialog}>Frank</li>
        <li className={style.dialog}>Julia</li>
        <li className={style.dialog}>Kevin</li>
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