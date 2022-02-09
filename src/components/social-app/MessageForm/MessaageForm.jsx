import style from './MessageForm.module.css';

const MessageForm = () => {
  return (
    <form action="" className="form">
      <div className={style.inner}>
        <label>
          <textarea name="" id="" cols="50" rows="5" placeholder="Post message"></textarea>
        </label>
        <button type="submit">Send</button>
      </div>
    </form>
  )
}

export default MessageForm;