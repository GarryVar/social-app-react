// import React from 'react';
import style from './MessageForm.module.css';
// import useState from 'react/cjs/react.production.min';



const MessageForm = () => {
  // let [state, setState] = React.useState(0);

  return (
    <form className="form" onSubmit={evt => evt.preventDefault()}>
      <div className={style.inner}>
        <label htmlFor="message">
          <textarea
            // onChange={evt => { setState(state = evt.target.value) }}
            name="message"
            id="message"
            cols="50"
            rows="5"
            placeholder="Post message"></textarea>
        </label>
        <button type="submit">Send</button>

        <div>
        </div>
      </div>
    </form >
  )
}

export default MessageForm;