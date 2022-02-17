import style from './MessageForm.module.css';

const MessageForm = () => {
  return (

      <form className="form" onSubmit={evt => evt.preventDefault()}>
      <div className={style.inner}>
        <label htmlFor="message">
          <textarea
            name="message"
            id="message"
            cols="50"
            rows="5"
            placeholder="Post message"></textarea>
        </label>
        <button type="submit">Send</button>
      </div>
    </form >
  )
}

export default MessageForm;
