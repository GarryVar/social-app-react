import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import state, {addPost, updateNewPostText} from "./redux/state";


let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

